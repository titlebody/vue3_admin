
import { createRouter, createWebHistory } from 'vue-router'
import  NProgress from "nprogress";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name:"login",
      path:"/login",
      meta:{
        title:"登录"
      },
      component:()=>import("@/views/login/index.vue"),
    },
    {
      name:"web",
      path:"/",
      redirect : "/admin",
    },
    {
      name:"admin",
      path:"/admin",
      component:()=>import("@/views/admin/index.vue"),
      meta:{
        title:"首页"
      },
      children:[
        {name:"home",path:"",component:()=>import("@/views/admin/home/index.vue")},
        {
          name:"userCenter",
          path:"user_center",
          meta:{
            title:"个人中心",
          },
          children:[
            {name:"userInfo",path:"user_info",component:()=>import("@/views/admin/user_center/index.vue"),meta:{
              title:"个人信息",
              }}
          ]
        },
        {
          name:"userManage",
          path:"user_manage",
          meta:{
            title: "用户管理"
          },
          children:[
            {name:"userList",path:"user_list",component:()=>import("@/views/admin/user_manage/index.vue"),meta:{
              title:"用户列表",
              }}
          ]
        },
        {
          name:"userArticle",
          path:"user_article",
          meta:{
            title:"文章管理",
          },
          children:[
            {name:"ArticleList",path: "article_list",component:()=>import("@/views/admin/article/articleList.vue"),meta:{
              title:"文章列表"
              }},
            {name:"ArticleAdd",path: "article_add",component:()=>import("@/views/admin/article/articleAdd.vue"),meta:{
              title:"新增文章"
              }},
          ]
        },
        {
          name:"settingsManage",
          path:"settings_manage",
          meta:{
            title:"系统设置"
          },
          children:[
            {name:"settings",path:"settings",component:()=>import("@/views/admin/settings_manage/index.vue"),meta:{
              title:"系统信息"
              }}
          ]
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()  //开始进度条
  next()
})
router.afterEach((to, from, next) => {
  NProgress.done()  //完成进度条
})



export default router
