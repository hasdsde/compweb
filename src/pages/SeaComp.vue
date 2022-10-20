<template>
  <div class="q-pa-md q-gutter-sm">
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
          {label: '嘉然', value: '1'},
          {label: '向晚', value: '2'},
          {label: '贝拉', value: '3'},
          {label: '乃林', value: '4'},
          {label: '嘉乐', value: '5'},
        ]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const TeacherName = ref('')
</script>

<style scoped>
.my-custom-toggle {
  border: 1px solid #027be3;
  width: 50vw;
}

</style>

