<script setup lang="ts">


import router from "@/router";

function handleSelect(val :string){
  if (val=="logout"){
    //注销
    return
  }
  router.push({name:val})

}
interface OptionType{
  name:string
  title:string
}
const options:OptionType=[
  {title:"个人信息",name:"userInfo"},
  {title:"用户列表",name:"userList"},
  {title:"系统信息",name:"settings"},
  {title:"注销推出",name:"logout"}
]
</script>

<template>
  <a-dropdown @select="handleSelect" :popup-max-height="false">
    <div  class="c_user_down">
      <a-avatar :size="35" image-url="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"></a-avatar>
      <span class="user_name">胡晨曦</span><icon-down/>
    </div>
    <template #content>
      <a-doption v-for="item in options" :value="item.name">{{item.title}}</a-doption>
    </template>
  </a-dropdown>
</template>

<style lang="less">
.c_user_down{
  cursor: pointer;
  .user_name{
    margin: 0 10px;
  }
  svg{
    margin: 0 !important;
  }
}
</style>