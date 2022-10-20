import {ref} from "vue";

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