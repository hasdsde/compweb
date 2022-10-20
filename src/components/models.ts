import {ref} from "vue";
import {Notify} from 'quasar'

export interface Todo {
    id: number;
    content: string;
}

export interface Meta {
    totalCount: number;
}

//菜单数据
export let menu = ref([
    {
        icon: 'home', label: '比赛', id: 1, isopen: true, children: [
            {link: 'sea', icon: 'travel_explore', desc: '大海捞针', id: 4,},
            {link: 'home', icon: 'travel_explore', desc: '首页', id: 7,},
            {link: 'fish', icon: 'animation', desc: '鱼目混珠', id: 5},
            {link: 'location', icon: 'explore', desc: '鱼目混珠', id: 6},
        ]
    },
    {
        icon: 'tune', label: '管理', id: 7, isopen: true, children: [
            {link: 'userManager', icon: 'manage_accounts', desc: '数据管理', id: 4,},
        ]
    },
    {
        icon: 'perm_identity', label: '其他', isopen: true, id: 2, children: [
            {link: 'about', icon: 'info', desc: '关于', id: 3},
        ]
    },
])

export function CommonSuccess(Message: string) {
    Notify.create({
        type: 'positive',
        message: Message,
        position: 'top',
        icon: 'done',
        group: false,
        timeout: 1000,
    })
}

export function CommonFail(Message: string) {
    Notify.create({
        type: 'negative',
        message: Message,
        position: 'top',
        icon: 'info',
        group: false,
        timeout: 1000,
    })
}

