import Home from '@/module/home/page/home.vue';
import page_list from '@/module/cms/page/page_list.vue';
export default [{
    path: '/',
    component: Home,
    name: 'CMS测试页面',
    hidden: false,
    children:[
      {
        path:'/cms/page/list',
        name:'测试---------页面列表',
        component: page_list,
        hidden:false
      }
      ]
  }
]
