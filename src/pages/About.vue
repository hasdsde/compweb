<template>
    <div class="q-pa-md q-gutter-sm">
        <q-banner class="bg-primary text-white">
            这东西我做的，这东西开源了，这东西做起来好麻烦<br>
            没办法啊啊<br>
            当年还说给钱呢，结果连自己人都坑，丢不丢人啊?
            <template v-slot:action>
                <q-btn flat color="white" label="服务端开源地址" target="_blank"
                       href="https://github.com/hasdsde/Comp"/>
                <q-btn flat color="white" label="网页端开源地址" target="_blank"
                       href="https://github.com/hasdsde/Compweb"/>
            </template>
        </q-banner>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped></style>

