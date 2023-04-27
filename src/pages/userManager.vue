<template>
    <div class="q-pa-md">
        <q-table
                title="学生数据表"
                :rows="rows"
                :columns="columns"
                row-key="id"
                :pagination.sync="myPagination" rows-per-page-label="每页数据"
        >
            <template v-slot:body-cell-img="props">
                <q-td :props="props">
                    <div>
                        <q-btn color="primary" label="查看" size="sm"/>
                    </div>
                    <div class="my-table-details">
                        {{ props.row.details }}
                    </div>
                </q-td>
            </template>
        </q-table>
    </div>
</template>

<script lang="ts" setup>
import {api} from "boot/axios";
import {ref} from "vue";

let rows = ref()
loadPage()
const columns = [
    {
        field: 'id',
        required: true,
        label: 'ID',
        align: 'left',
        sortable: true
    },
    {field: 'name', align: 'center', label: '姓名', sortable: true},
    {field: 'no', label: '学号', align: 'center', sortable: true},
    {field: 'sex', label: '性别', align: 'center', sortable: true},
    {field: 'grade', label: '年级专业班级', align: 'center', sortable: true},
    {field: 'img', label: '图片', align: 'center', sortable: true, name: 'img'},
    {field: 'face', label: '政治面貌', align: 'center', sortable: true},
    {field: 'people', label: '民族', align: 'center', sortable: true},
    {field: 'job', label: '担任职务', align: 'center', sortable: true},
    {field: 'address', label: '家庭住址', align: 'center', sortable: true},
    {field: 'flat', label: '宿舍号', align: 'center', sortable: true},
    {field: 'ecomony', label: '家庭经济情况', align: 'center', sortable: true},
    {field: 'reward', label: '奖惩情况', align: 'center', sortable: true},
    {field: 'study', label: '学习情况', align: 'center', sortable: true},
    {field: 'hobby', label: '兴趣爱好', align: 'center', sortable: true},
    {field: 'target', label: '职业倾向', align: 'center', sortable: true},
    {field: 'instructor', label: '辅导员姓名', align: 'center', sortable: true},
]

function loadPage() {
    api.get('/student/all').then(res => {
        rows.value = res.data
    })
}

const myPagination = {
    rowsPerPage: 0
}
</script>

<style scoped>

</style>

