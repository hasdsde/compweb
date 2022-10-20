<template>
  <div class="q-pa-md q-gutter-sm">
    <!--  老师姓名选择  -->
    <div class="row justify-center q-pt-md">
      <div>
        <q-btn-toggle
            v-model="TeacherName"
            spread
            class="my-custom-toggle"
            no-caps
            rounded
            unelevated
            toggle-color="primary"
            color="white"
            text-color="primary"
            :options="[
          {label: '嘉然', value: '嘉然'},
          {label: '向晚', value: '向晚'},
          {label: '贝拉', value: '贝拉'},
          {label: '乃林', value: '乃林'},
          {label: '嘉乐', value: '嘉乐'},
        ]"
        />
      </div>
    </div>
    <!--  开始计时  -->
    <div class="row justify-center q-pt-md">
      <q-btn color="primary" label="开始计时 !" @click="start"/>
    </div>
    <!--  答题卡片  -->
    <div class="row justify-center q-pt-md">
      <q-card class="my-card  text-white q-ma-md" v-for="compData in CompDatas">
        <q-card-section :class="'bg-'+compData.color">
          <div class="text-h6">{{ compData.name }}</div>
          <div class="text-subtitle2 q-mb-md">{{ compData.no }}</div>
          <q-separator dark/>
        </q-card-section>
        <q-card-section :class="'text-'+compData.color">
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>性别:</span></div>
            <div class="col-6"><span>{{ compData.sex }}</span></div>
            <div class="col-2" style="max-height: 30px">
              <q-btn :color="compData.color" outline label="查看" size="xs"/>
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>年级专业班级:</span></div>
            <div class="col-6"><span>{{ compData.grade }}</span></div>
            <div class="col-2">
              <q-btn :color="compData.color" outline label="查看" size="xs"/>
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>政治面貌:</span></div>
            <div class="col-6"><span>{{ compData.face }}</span></div>
            <div class="col-2">
              <q-btn :color="compData.color" outline label="查看" size="xs"/>
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>民族:</span></div>
            <div class="col-6"><span>{{ compData.people }}</span></div>
            <div class="col-2">
              <q-btn :color="compData.color" outline label="查看" size="xs"/>
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>担任职务:</span></div>
            <div class="col-6"><span>{{ compData.job }}</span></div>
            <div class="col-2">
              <q-btn :color="compData.color" outline label="查看" size="xs"/>
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>家庭住址:</span></div>
            <div class="col-6"><span>{{ compData.address }}</span></div>
            <div class="col-2">
              <q-btn :color="compData.color" outline label="查看" size="xs"/>
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>宿舍号:</span></div>
            <div class="col-6"><span>{{ compData.flat }}</span></div>
            <div class="col-2">
              <q-btn :color="compData.color" outline label="查看" size="xs"/>
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>家庭经济情况:</span></div>
            <div class="col-6"><span>{{ compData.ecomony }}</span></div>
            <div class="col-2">
              <q-btn :color="compData.color" outline label="查看" size="xs"/>
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>奖惩情况:</span></div>
            <div class="col-6"><span>{{ compData.reward }}</span></div>
            <div class="col-2">
              <q-btn :color="compData.color" outline label="查看" size="xs"/>
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>学习情况:</span></div>
            <div class="col-6"><span>{{ compData.study }}</span></div>
            <div class="col-2">
              <q-btn :color="compData.color" outline label="查看" size="xs"/>
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>兴趣爱好:</span></div>
            <div class="col-6"><span>{{ compData.hobby }}</span></div>
            <div class="col-2">
              <q-btn :color="compData.color" outline label="查看" size="xs"/>
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>职业倾向:</span></div>
            <div class="col-6"><span>{{ compData.target }}</span></div>
            <div class="col-2">
              <q-btn :color="compData.color" outline label="查看" size="xs"/>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {api} from "boot/axios";
import {CommonFail} from "components/models";

const TeacherName = ref('')
const value = ref(false)
const CompDatas = ref({})

function start() {
  if (TeacherName.value == '') {
    CommonFail('请选择教师')
  } else {
    api.get('/student/compA/' + TeacherName.value).then(res => {
      res.data[0].color = 'accent'
      res.data[1].color = 'secondary'
      res.data[2].color = 'orange'
      CompDatas.value = res.data
      console.log(res.data)
    })
  }
}
</script>

<style scoped>
.my-custom-toggle {
  border: 1px solid #027be3;
  width: 50vw;
}

.my-card {
  width: 100%;
  max-width: 400px;
}

</style>

