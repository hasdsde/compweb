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
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {CommonFail} from "components/models";
import {useQuasar} from "quasar";
import {api} from "boot/axios";

const TeacherName = ref('')
const sec = ref(0)
const pec = ref(0)
const allTime = 20
const score = ref(0)
const $q = useQuasar()
let allData = []
const yourStudent = ref([])
const notYourStudent = ref([])

function start() {
  if (sec.value > 0) {
    CommonFail('不得重复计时')
  } else {
    if (TeacherName.value == '') {
      CommonFail('请选择教师')
    } else {
      api.get('/student/CompB/' + TeacherName.value).then(res => {
        allData = res.data
        for (let i = 0; i < 8; i++) {
          if (i < 4) {//@ts-ignore
            yourStudent.value.push(allData[i])
          } else {//@ts-ignore
            notYourStudent.value.push(allData[i])
          }
        }
        allData.sort(function () {
          return Math.random() - 0.5
        })
        console.log(yourStudent.value);
        console.log(notYourStudent.value);
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

