<script setup lang="ts">
import {collapsed}from '@/components/admin/f_menu'
</script>

<template>
<div class="c_logo" :class="{collapsed: collapsed}">
  <img src="https://www.logosc.cn/oss/icons/2023/03/20/tOY9KpHFaeglM4b.png" class="logo" alt="logo">
  <div class="slogan">
    <div>晨曦知道</div>
    <div>chenxizhidao</div>
  </div>
</div>
</template>

<style lang="less">

.c_logo{
  display: flex;
  justify-content: center;
  align-items: center;
  &.collapsed{
    .slogan{
      transform: scale(0);
      transform-origin: left;
      opacity: 0;
    }
    .logo{
      transform: translateX(50px);
      width: 40px;
      height: 40px;
    }

  }
  .logo{
    width: 50px;
    height: 50px;
    transition: all .3s;
  }
  .slogan{
    margin: 10px;
    transition: all .3s;
    div:nth-child(1){
      font-size: 22px;
      font-weight: 600;
    }
    div:nth-child(2){
      font-size: 12px;
      margin-top: 2px;
    }
  }
}
</style>