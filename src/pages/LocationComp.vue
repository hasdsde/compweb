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
    <div class="row justify-center q-pt-md ">
      <q-btn color="primary" label="开始计时 !" @click="start"/>

    </div>
    <!--  倒计时  -->
    <div class="row justify-center q-pt-md ">
      <q-linear-progress rounded size="30px" stripe :value="pec" color="primary" style="width: 60vw"
                         class="q-mt-sm ">
        <div class="absolute-full flex flex-center">
          <q-badge text-color="white" :label="sec+'秒'"/>
        </div>
      </q-linear-progress>
    </div>
    <!--  答题卡片  -->
    <div class="row justify-center q-pt-md">
      <q-card class="my-card  text-white q-ma-md" v-for="compData in CompDatas">
        <q-card-section :class="'bg-'+compData.color">
          <div class="row">
            <div class="col">
              <q-btn color="white" text-color="black" label="查看" @click="compData.dis = !compData.dis" size="sm"/>
              <q-checkbox v-model="compData.bool" @click="score=score+1" size="xs"/>
              <div class="text-h6" v-if="compData.dis">{{ compData.name }}</div>
            </div>
            <div class="col">
            </div>
            <div class="col">

            </div>
          </div>
          <q-separator dark/>
        </q-card-section>
        <q-card-section :class="'text-'+compData.color">
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>性别:</span></div>
            <div class="col-5"><span v-if="(Math.round(Math.random()))>0.5">{{ compData.sex }}</span></div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>年级专业班级:</span></div>
            <div class="col-5"><span v-if="(Math.round(Math.random()))>0.5">{{ compData.grade }}</span></div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>政治面貌:</span></div>
            <div class="col-5"><span v-if="(Math.round(Math.random()))>0.5">{{ compData.face }}</span></div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>民族:</span></div>
            <div class="col-5"><span v-if="(Math.round(Math.random()))>0.5">{{ compData.people }}</span></div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>担任职务:</span></div>
            <div class="col-5"><span v-if="(Math.round(Math.random()))>0.5">{{ compData.job }}</span></div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>家庭住址:</span></div>
            <div class="col-5"><span v-if="(Math.round(Math.random()))>0.5">{{ compData.address }}</span></div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>宿舍号:</span></div>
            <div class="col-5"><span v-if="(Math.round(Math.random()))>0.5">{{ compData.flat }}</span></div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>家庭经济情况:</span></div>
            <div class="col-5"><span v-if="compData.Becomony">{{ compData.ecomony }}</span></div>
            <div class="col-3">
              <q-btn :color="compData.color" outline label="查看" size="xs"
                     @click="compData.Becomony = !compData.Becomony"/>
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>奖惩情况:</span></div>
            <div class="col-5"><span v-if="compData.Breward">{{ compData.reward }}</span></div>
            <div class="col-3">
              <q-btn :color="compData.color" outline label="查看" size="xs"
                     @click="compData.Breward = !compData.Breward"/>
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>学习情况:</span></div>
            <div class="col-5"><span v-if="compData.Bstudy">{{ compData.study }}</span></div>
            <div class="col-3">
              <q-btn :color="compData.color" outline label="查看" size="xs" @click="compData.Bstudy = !compData.Bstudy"/>
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>兴趣爱好:</span></div>
            <div class="col-5"><span v-if="compData.Bhobby">{{ compData.hobby }}</span></div>
            <div class="col-3">
              <q-btn :color="compData.color" outline label="查看" size="xs" @click="compData.Bhobby = !compData.Bhobby"/>
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>职业倾向:</span></div>
            <div class="col-5"><span v-if="compData.Btarget">{{ compData.target }}</span></div>
            <div class="col-3">
              <q-btn :color="compData.color" outline label="查看" size="xs"
                     @click="compData.Btarget = !compData.Btarget"/>
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
import {CommonFail, CommonSuccess} from "components/models";
import {useQuasar} from "quasar";

const TeacherName = ref('')
const CompDatas = ref({})
const sec = ref(0)
const pec = ref(0)
const allTime = 20
const $q = useQuasar()
const score = ref(0)


function start() {
  if (sec.value > 0) {
    CommonFail('不得重复计时')
  } else {
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
      //开始倒计时,清空状态
      score.value = 0
      pec.value = 1
      sec.value = allTime
      setInterval(() => {
        sec.value = sec.value - 1
        pec.value = sec.value / allTime
        if (sec.value === 1) {
          $q.dialog({
            title: '结束:' + TeacherName.value,
            message: '时间结束,最终分数为:' + score.value,
            persistent: true
          }).onOk(() => {
            // console.log('OK')
            let compC = []
            if (localStorage.getItem('CompC') == undefined) {
              compC.push({'name': TeacherName.value, 'score': score.value})
            } else {
              //@ts-ignore
              compC = JSON.parse(localStorage.getItem("CompC"))
              compC.push({'name': TeacherName.value, 'score': score.value})
            }
            localStorage.setItem('CompC', JSON.stringify(compC))
            CommonSuccess('数据已保存')
          })
        }
        if (sec.value < 1) {
          sec.value = 0
        }
      }, 1000)
    }
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

