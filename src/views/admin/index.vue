<script setup lang="ts">

import C_theme from "@/components/common/c_theme.vue";
import C_screen from "@/components/common/c_screen.vue";
import C_menu from "@/components/admin/c_menu.vue";
import {collapsed} from "@/components/admin/f_menu";
import C_Breadcrumb from "@/components/admin/c_Breadcrumb.vue";
import C_user_dropdown from "@/components/common/c_user_dropdown.vue";
import router from "@/router";
import C_tables from "@/components/admin/c_tables.vue";
import C_logo from "@/components/admin/c_logo.vue";


function goHome() {
  router.push({
    name: "home",
    path:"/admin",
  });
}


</script>

<template>
<div class="c_admin">
  <div class="c_aside" :class="{collapsed:collapsed}">
    <c_logo></c_logo>
    <c_menu></c_menu>
  </div>
  <div class="c_main">
    <div class="c_head">
      <div class="crumbs">
        <c_-breadcrumb></c_-breadcrumb>
      </div>
      <div class="actions">
        <span title="去首页" @click="goHome"><icon-home /></span>
        <c_theme></c_theme>
        <c_screen></c_screen>
        <div class="c_ingo_actions"></div>
        <c_user_dropdown></c_user_dropdown>
      </div>
    </div>
    <c_tables></c_tables>
    <div class="c_container">
      <router-view v-slot="{Component}" class="c_base_view">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
  </div>

</div>
</template>

<style lang="less">

// 组件开始离开
.fade-leave-active{

}

//组件离开结束
.fade-leave-to{
  transform: translateX(30px);
  opacity: 0;

}

//组件开始进
.fade-enter-active{
  transform: translateX(-30px);
  opacity: 0;

}

//组件开始出
.fade-enter-to{
  transform: translateX(0);
  opacity: 1;

}

//正在进入和离开
.fade-leave-active, .fade-enter-active{
  transition: all .3s ease-out;
}


.c_admin{
  display: flex;
  background-color: var(--color-bg-1);
  color: @color-text-1;

  .c_aside{
    width: 240px;
    height: 100vh;
    overflow: hidden;
    border-right: @c_border;

    .c_logo{
      width: 100%;
      height: 90px;
      border-bottom: @c_border;

    }
    &.collapsed{
      width: 48px;
      &~.c_main{
        width: calc(100% - 48px);
      }
    }
  }

  .c_main{
    width: calc(100% - 240px);

    .c_head{
      width: 100%;
      height: 60px;
      border-bottom: @c_border;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      .actions{
        display: flex;
        align-items: center;
        svg{
          font-size: 18px;
          cursor: pointer;
          margin-right: 10px;
        }
      }
    }
    .c_tables{
      width: 100%;
      height: 30px;
      border-bottom: @c_border;


    }
    .c_container{
      width: 100%;
      height: calc(100% - 90px);
      overflow-x: hidden;
      overflow-y: auto;
      background-color: @color-fill-2;
      padding: 20px;
      .c_base_view{
        background-color: var(--color-bg-1);
        border-radius: 5px;
        height: 100%;
      }
    }

  }
}
</style>