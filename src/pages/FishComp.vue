<template>
  <div class="q-pa-md q-gutter-sm">
    <!--  老师姓名选择  -->
    <div class="row justify-center q-pt-md">
      <div>
        <q-btn-toggle v-model="TeacherName" spread class="my-custom-toggle" no-caps rounded unelevated
          toggle-color="primary" color="white" text-color="primary" :options="[
              { label: '嘉然', value: '嘉然' },
              { label: '向晚', value: '向晚' },
              { label: '贝拉', value: '贝拉' },
              { label: '乃林', value: '乃林' },
              { label: '嘉乐', value: '嘉乐' },
            ]" />
      </div>
    </div>
    <!--  开始计时  -->
    <div class="row justify-center q-pt-md ">
      <q-btn color="primary" label="开始计时 !" @click="start" />
    </div>
    <!--  倒计时  -->
    <div class="row justify-center q-pt-md ">
      <q-linear-progress rounded size="30px" stripe :value="pec" color="primary" style="width: 60vw" class="q-mt-sm ">
        <div class="absolute-full flex flex-center">
          <q-badge text-color="white" :label="sec + '秒'" />
        </div>
      </q-linear-progress>
    </div>
    <!--  猜测图片  -->
    <div class="row justify-center q-pt-md" style="max-width: 80vw">
      <q-card class="my-card q-ma-md" v-for="(data, index) in allDataRef" style="width: 300px">
        <q-item>
          <q-item-section avatar>
            {{ data }}
            <q-checkbox v-model="yourSelect[index]" />
          </q-item-section>

          <q-item-section>
            <q-item-label>编号{{ index }}</q-item-label>
            <q-item-label caption>SELECT</q-item-label>
          </q-item-section>
        </q-item>

        <img src="https://cdn.quasar.dev/img/parallax2.jpg">
      </q-card>
    </div>
    <!--  倒计时  -->
    <div class="row justify-center q-pt-md ">
      <q-linear-progress rounded size="30px" stripe :value="Npec" color="purple" style="width: 60vw" class="q-mt-sm ">
        <div class="absolute-full flex flex-center">
          <q-badge text-color="white" :label="Nsec + '秒'" />
        </div>
      </q-linear-progress>
    </div>
    <!--  答题卡片  -->
    <div class="row justify-center q-pt-md">
      <q-card class="my-card  text-white q-ma-md" v-for="compData in nextData">
        <q-card-section :class="'bg-' + compData.color">
          <div class="text-h6">{{ compData.name }}</div>
          <div class="text-subtitle2 q-mb-md">{{ compData.no }}</div>
          <q-separator dark />
        </q-card-section>
        <q-card-section :class="'text-' + compData.color">
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>性别:</span></div>
            <div class="col-5"><span v-if="compData.Bsex">{{ compData.sex }}</span></div>
            <div class="col-3" style="max-height: 30px">
              <q-checkbox v-model="compData.c1" :color="compData.color" @click="score = score + 1" size="xs" />
              <q-btn :color="compData.color" outline label="查看" @click="compData.Bsex = !compData.Bsex" size="xs" />
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>年级专业班级:</span></div>
            <div class="col-5"><span v-if="compData.Bgrade">{{ compData.grade }}</span></div>
            <div class="col-3">
              <q-checkbox v-model="compData.c2" :color="compData.color" @click="score = score + 1" size="xs" />
              <q-btn :color="compData.color" outline label="查看" @click="compData.Bgrade = !compData.Bgrade" size="xs" />
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>政治面貌:</span></div>
            <div class="col-5"><span v-if="compData.Bface">{{ compData.face }}</span></div>
            <div class="col-3">
              <q-checkbox v-model="compData.c3" :color="compData.color" @click="score = score + 1" size="xs" />
              <q-btn :color="compData.color" outline label="查看" @click="compData.Bface = !compData.Bface" size="xs" />
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>民族:</span></div>
            <div class="col-5"><span v-if="compData.Bpeople">{{ compData.people }}</span></div>
            <div class="col-3">
              <q-checkbox v-model="compData.c4" :color="compData.color" @click="score = score + 1" size="xs" />
              <q-btn :color="compData.color" outline label="查看" size="xs" @click="compData.Bpeople = !compData.Bpeople" />
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>担任职务:</span></div>
            <div class="col-5"><span v-if="compData.Bjob">{{ compData.job }}</span></div>
            <div class="col-3">
              <q-checkbox v-model="compData.c5" :color="compData.color" @click="score = score + 1" size="xs" />
              <q-btn :color="compData.color" outline label="查看" size="xs" @click="compData.Bjob = !compData.Bjob" />
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>家庭住址:</span></div>
            <div class="col-5"><span v-if="compData.Baddress">{{ compData.address }}</span></div>
            <div class="col-3">
              <q-checkbox v-model="compData.c6" :color="compData.color" @click="score = score + 1" size="xs" />
              <q-btn :color="compData.color" outline label="查看" size="xs"
                @click="compData.Baddress = !compData.Baddress" />
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>宿舍号:</span></div>
            <div class="col-5"><span v-if="compData.Bflat">{{ compData.flat }}</span></div>
            <div class="col-3">
              <q-checkbox v-model="compData.c7" :color="compData.color" @click="score = score + 1" size="xs" />
              <q-btn :color="compData.color" outline label="查看" size="xs" @click="compData.Bflat = !compData.Bflat" />
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>家庭经济情况:</span></div>
            <div class="col-5"><span v-if="compData.Becomony">{{ compData.ecomony }}</span></div>
            <div class="col-3">
              <q-checkbox v-model="compData.c8" :color="compData.color" @click="score = score + 1" size="xs" />
              <q-btn :color="compData.color" outline label="查看" size="xs"
                @click="compData.Becomony = !compData.Becomony" />
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>奖惩情况:</span></div>
            <div class="col-5"><span v-if="compData.Breward">{{ compData.reward }}</span></div>
            <div class="col-3">
              <q-checkbox v-model="compData.c9" :color="compData.color" @click="score = score + 1" size="xs" />
              <q-btn :color="compData.color" outline label="查看" size="xs" @click="compData.Breward = !compData.Breward" />
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>学习情况:</span></div>
            <div class="col-5"><span v-if="compData.Bstudy">{{ compData.study }}</span></div>
            <div class="col-3">
              <q-checkbox v-model="compData.c10" :color="compData.color" @click="score = score + 1" size="xs" />
              <q-btn :color="compData.color" outline label="查看" size="xs" @click="compData.Bstudy = !compData.Bstudy" />
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>兴趣爱好:</span></div>
            <div class="col-5"><span v-if="compData.Bhobby">{{ compData.hobby }}</span></div>
            <div class="col-3">
              <q-checkbox v-model="compData.c11" :color="compData.color" @click="score = score + 1" size="xs" />
              <q-btn :color="compData.color" outline label="查看" size="xs" @click="compData.Bhobby = !compData.Bhobby" />
            </div>
          </div>
          <div class="row" style="min-height: 30px">
            <div class="col-4"><span>职业倾向:</span></div>
            <div class="col-5"><span v-if="compData.Btarget">{{ compData.target }}</span></div>
            <div class="col-3">
              <q-checkbox v-model="compData.c12" :color="compData.color" @click="score = score + 1" size="xs" />
              <q-btn :color="compData.color" outline label="查看" size="xs" @click="compData.Btarget = !compData.Btarget" />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { CommonFail, CommonSuccess } from "components/models";
import { useQuasar } from "quasar";
import { api } from "boot/axios";
import { useRouter } from "vue-router/dist/vue-router";

const selected = ref([])
const TeacherName = ref('')
const sec = ref(0)
const pec = ref(0)
const allTime = 10
const Nsec = ref(0)
const Npec = ref(0)
const NallTime = 60
const score = ref(0)
const $q = useQuasar()
let allData = []//全部信息
const yourStudent = ref([])//正确的学生信息
const notYourStudent = ref([])//错误的学生信息
const allDataRef = ref([])//全部信息带响应式
const yourSelect: any = ref([])//你的选择
const yourSelectArray = ref([])//你选择的学生学号
const correctSelect = ref([])//你的正确的选择
const nextData: any = ref([])
const $router = useRouter()

for (let i = 0; i < 8; i++) {
  yourSelect.value[i] = false
}

//开始启动
function start() {
  //不能重复计时
  if (sec.value > 0) {
    CommonFail('不得重复计时')
  } else {
    if (TeacherName.value == '') {
      CommonFail('请选择教师')
    } else {
      loadData()//获取后台信息
      clearTimer()//开始倒计时,清空状态
      setInterval(() => {
        sec.value = sec.value - 1
        pec.value = sec.value / allTime
        if (sec.value === 1) {
          checkCorrect()//挑选出正确的信息
          showResult()
        }
        if (sec.value < 1) {
          sec.value = 0
        }
      }, 1000)
    }
  }
}

//获取后台信息
function loadData() {
  //后台获取信息
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
    //混淆后将数据传入Ref
    allDataRef.value = allData
  })
}

//清空计时器
function clearTimer() {
  score.value = 0
  pec.value = 1
  sec.value = allTime
}

function NclearTimer() {
  score.value = 0
  Npec.value = 1
  Nsec.value = NallTime
}

//判断你的选择是否正确
function checkCorrect() {
  for (let i = 0; i < 8; i++) {
    if (yourSelect.value[i] == true) {
      yourSelectArray.value.push(allDataRef.value[i])
    }
  }
  yourSelectArray.value.forEach((your: any) => {
    yourStudent.value.forEach((yourStudent: any) => {
      if (your === yourStudent) {
        //@ts-ignore
        correctSelect.value.push(your)
      }
    })
  })

}

//下一步的猜测操作
function guessInfo() {
  api.post('/student/CompBList', { ids: correctSelect.value }).then(res => {
    res.data.forEach((data: any) => {
      data.color = 'primary'
      data.c1 = false
      data.c2 = false
      data.c3 = false
      data.c4 = false
      data.c5 = false
      data.c6 = false
      data.c7 = false
      data.c8 = false
      data.c9 = false
      data.c10 = false
      data.c11 = false
      data.c12 = false
    })
    nextData.value = res.data
  })
}

//展示结果
function showResult() {
  $q.dialog({
    title: '结束:' + TeacherName.value,
    message: '时间结束,挑选正确个数为:' + correctSelect.value.length + ',点击OK进行下一步',
    persistent: true
  }).onOk(() => {
    //进入下一场
    NextComp()
  })
}

''

//下一步
function NextComp() {
  NclearTimer()
  guessInfo()
  //下一步开始倒计时
  setInterval(() => {
    Nsec.value = Nsec.value - 1
    Npec.value = Nsec.value / NallTime
    if (Nsec.value === 1) {
      CommonSuccess('点击确定保存数据')//其实没有保存
      $q.dialog({
        title: '结束:' + TeacherName.value,
        message: '时间结束,最终分数为:' + score.value,
        persistent: true
      }).onOk(() => {
        // console.log('OK')
        let CompB = []
        if (localStorage.getItem('CompB') == undefined) {
          CompB.push({ 'name': TeacherName.value, 'score': score.value })
        } else {
          //@ts-ignore
          CompB = JSON.parse(localStorage.getItem("CompB"))
          CompB.push({ 'name': TeacherName.value, 'score': score.value })
        }
        localStorage.setItem('CompB', JSON.stringify(CompB))
        $router.go(0);
      })
    }
    if (Nsec.value < 1) {
      Nsec.value = 0
    }
  }, 1000)
}

//倒计时结束时，获取正确的学生学号数组
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

.my-card {
  max-width: 300px;
}

.my-custom-toggle {
  border: 1px solid #027be3;
  width: 50vw;
}

.my-card {
  width: 100%;
  max-width: 400px;
}
</style>

