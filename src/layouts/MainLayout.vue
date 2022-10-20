<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-breadcrumbs  style="font-size: 14px">
            <q-breadcrumbs-el :label="positions[0]" icon="home" style="color: white"/>
            <q-breadcrumbs-el :label="positions[1]" icon="widgets" style="color: white"/>
          </q-breadcrumbs>
        </q-toolbar-title>

        <div>比赛系统</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import Aside from '../components/Aside.vue';
import {useStore} from "src/store";
import {menu} from "components/models";
import {useRouter} from "vue-router/dist/vue-router";

const $router = useRouter()
const $store = useStore()
//从其他文件获取的菜单
let menus = ref(menu)
let positions = ref()
//监听当前路由变化，一旦变化调用下面函数
watch(() => $router.currentRoute.value.path, (newValue, oldValue) => {
  positions.value = findTitle()
  console.log(positions)
}, {immediate: true})
//遍历菜单，寻找与当前路由相同的中文名，将其返回
function findTitle() {
  let position = []
  for (let i = 0; i < menus.value.length; i++) {
    for (let j = 0; j < menus.value[i].children.length; j++) {
      if (menus.value[i].children[j].link === $router.currentRoute.value.path.replace("/", '')) {//匹配当前数据
        position[0] = menus.value[i].label//获取一级菜单
        position[1] = menus.value[i].children[j].desc//获取二级菜单
        return position
      }
    }
  }
}


const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
