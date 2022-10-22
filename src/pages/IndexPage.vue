<template>
  <div class="q-pa-md">
    <q-btn color="deep-orange" class="q-ml-md" @click="clearData()" glossy label="清空数据"/>
    <div class="row">
      <div class="col q-pa-md">
        <q-table
            title="比赛A  大海捞针"
            :rows="rowA"
            :columns="columns"
            row-key="name"
            :pagination="pagination"
            no-data-label="暂无数据"
        />
      </div>
      <div class="col q-pa-md">
        <q-table
            title="比赛B  鱼目混珠"
            :rows="rowB"
            :columns="columns"
            row-key="name"
            :pagination="pagination"
            no-data-label="暂无数据"
        />
      </div>
      <div class="col q-pa-md">
        <q-table
            title="比赛C  描述定位"
            :rows="rowC"
            :columns="columns"
            row-key="name"
            :pagination="pagination"
            no-data-label="暂无数据"
        />
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useQuasar} from "quasar";
import {useRouter} from "vue-router/dist/vue-router";

const pagination = {
  rowsPerPage: 10
}
let $q = useQuasar();
const columns = [
  {name: 'name', align: 'left', label: '姓名', field: 'name', sortable: true},
  {name: 'score', label: '分数', align: 'left', field: 'score', sortable: true},
]
const rows = [
  {
    name: 159,
    score: 6.0,
  },
  {
    name: 237,
    score: 9.0,
  },
  {

    name: 262,
    score: 16.0,
  },
  {
    name: 305,
    score: 3.7,
  },
  {

    name: 356,
    score: 16.0,
  },
  {
    name: 375,
    score: 0.0,
  },
]
const rowA = ref([])
const rowB = ref([])
const rowC = ref([])
const $router = useRouter();

if (localStorage.getItem('CompA') != undefined) {
  //@ts-ignore
  rowA.value = JSON.parse(localStorage.getItem('CompA'));
  console.log(rowA.value)
}

if (localStorage.getItem('CompB') != undefined) {
  //@ts-ignore
  rowB.value = JSON.parse(localStorage.getItem('CompB'));
  console.log(rowB.value)
}
if (localStorage.getItem('CompC') != undefined) {
  //@ts-ignore
  rowC.value = JSON.parse(localStorage.getItem('CompC'));
  console.log(rowC.value)
}

function clearData() {
  $q.notify({
    message: '确定要删除吗?',
    type: 'negative',
    position: 'top',
    actions: [
      {
        label: '确定', color: 'yellow', handler: () => { /* ... */
          localStorage.clear()
          $router.go(0)
        }
      },
      {
        label: '取消', color: 'white', handler: () => { /* ... */
        }
      }
    ]
  })
}

</script>
