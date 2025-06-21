import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import discussfufeizhuanqu from '@/views/modules/discussfufeizhuanqu/list'
    import fasongjilu from '@/views/modules/fasongjilu/list'
    import fufeizhuanqu from '@/views/modules/fufeizhuanqu/list'
    import discussmianfeizhuanqu from '@/views/modules/discussmianfeizhuanqu/list'
    import xiaoxitixing from '@/views/modules/xiaoxitixing/list'
    import xuexijilu from '@/views/modules/xuexijilu/list'
    import forum from '@/views/modules/forum/list'
    import shujifenlei from '@/views/modules/shujifenlei/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zuozhe from '@/views/modules/zuozhe/list'
    import banlihuiyuan from '@/views/modules/banlihuiyuan/list'
    import goumaijilu from '@/views/modules/goumaijilu/list'
    import mianfeizhuanqu from '@/views/modules/mianfeizhuanqu/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/discussfufeizhuanqu',
        name: '付费专区评论',
        component: discussfufeizhuanqu
      }
      ,{
	path: '/fasongjilu',
        name: '发送记录',
        component: fasongjilu
      }
      ,{
	path: '/fufeizhuanqu',
        name: '付费专区',
        component: fufeizhuanqu
      }
      ,{
	path: '/discussmianfeizhuanqu',
        name: '免费专区评论',
        component: discussmianfeizhuanqu
      }
      ,{
	path: '/xiaoxitixing',
        name: '消息提醒',
        component: xiaoxitixing
      }
      ,{
	path: '/xuexijilu',
        name: '学习记录',
        component: xuexijilu
      }
      ,{
	path: '/forum',
        name: '论坛交流',
        component: forum
      }
      ,{
	path: '/shujifenlei',
        name: '书籍分类',
        component: shujifenlei
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/zuozhe',
        name: '作者',
        component: zuozhe
      }
      ,{
	path: '/banlihuiyuan',
        name: '办理会员',
        component: banlihuiyuan
      }
      ,{
	path: '/goumaijilu',
        name: '购买记录',
        component: goumaijilu
      }
      ,{
	path: '/mianfeizhuanqu',
        name: '免费专区',
        component: mianfeizhuanqu
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
