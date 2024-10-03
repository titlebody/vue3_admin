<script setup lang="ts">

import {type Component, ref, watch} from "vue";
import {IconHome,IconUser,IconSettings} from "@arco-design/web-vue/es/icon";
import C_component from "@/components/common/c_component.vue";
import {collapsed} from "@/components/admin/f_menu";
import router from "@/router";
import {useRoute} from "vue-router";
import MaterialSymbolsArticleOutline from '~icons/material-symbols/article-outline';

interface menuType {
  title: string
  name: string
  icon?: string|Component
  children?: menuType[]
}
const route = useRoute();


const menuList :menuType[]=[
  {
    title:"首页",
    name:'home',
    icon:IconHome,
  },
  {
    title:"个人中心",
    name:'userCenter',
    icon:IconUser,
    children:[
      {
        title:"个人信息",name:"userInfo",icon:"iconfont icon-yonghuxinxi"
      }
    ]
  },
  {
    title:"用户管理",
    name:'userManage',
    icon:"iconfont icon-yonghuguanli",
    children:[
      {
        title:"用户列表",name:"userList",icon:"iconfont icon-yonghuguanli_huaban"
      }
    ]
  },
  {
    title:"文章管理",
    name:'userArticle',
    icon:MaterialSymbolsArticleOutline,
    children:[
      {
        title:"文章新增",name:"ArticleAdd",icon:"iconfont icon-yonghuguanli_huaban"
      },
      {
        title:"文章列表",name:"ArticleList",icon:"iconfont icon-yonghuguanli_huaban"
      }
    ]
  },

/*  {
    title:"组件管理",
    name:"settingsManage",
    icon:IconUser,
    children:[
      {
        title:"组件列表",name:"componentList"
      }
    ]
  },*/
  {
    title:"系统设置",
    name:'settingsManage',
    icon:"iconfont icon-xitongpeizhi",
    children:[
      {
        title:"系统信息",name:"settings",icon:IconSettings
      }
    ]
  },
]

function menuClick(key:string){
  router.push({
    name:key
  })
}

const openKeys=ref<string[]>([])

const selectedKeys=ref<string[]>([])

function initRoute(){
  if (route.matched.length===3){
    openKeys.value=[route.matched[1].name as string];
  }
  selectedKeys.value=[route.name as string]
}


watch(()=>route.name,()=>{
  initRoute()
},{immediate:true})
</script>

<template>
  <div class="c_menu">
    <a-menu
        v-model:collapsed="collapsed"
        v-model:selected-keys="selectedKeys"
        @menu-item-click="menuClick"
        v-model:open-keys="openKeys"
        show-collapse-button
    >
      <template v-for="menu in menuList">
        <a-menu-item :key="menu.name" v-if="!menu.children">
          <template #icon>
            <c_component :is="menu.icon"></c_component>
          </template>
          {{menu.title}}
        </a-menu-item>
        <a-sub-menu :key="menu.name" v-else :title="menu.title">
          <template #icon>
            <c_component :is="menu.icon"></c_component>
          </template>
          <a-menu-item :key="sub.name" v-for="sub in menu.children">
            <template #icon>
              <c_component :is="sub.icon"></c_component>
            </template>
            {{sub.title}}
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>

</template>

<style lang="less">
.c_menu{
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100% - 90px);
  position: relative;
}
.arco-menu{
  position: initial;
}
.arco-menu-collapse-button{
  position: absolute;
  bottom: 0;
  right: 10px;

}
</style>