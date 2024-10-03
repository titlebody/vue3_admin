<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";
import router from "@/router";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';


let route=useRoute()
interface TabType{
  name:string
  title:string
  icon?:string
}
const swiperRef = ref(null);

let tabs=ref(<TabType[]>[
  {name:"home",title:"首页"},
  {name:"userInfo",title:"个人信息"},
  {name:"userList",title:"用户列表"},
  {name:"settings",title:"系统信息"},
  {name:"ArticleList",title:"文章管理"},
  {name:"ArticleAdd",title:"文章新增"},
])

function  removeItem(item:TabType){
  const index=tabs.value.findIndex(value=>item.name==value.name)

  if(index!==-1){
    if (item.name===route.name){
      router.push({
        name:tabs.value[index-1].name
      })
    }
  }
  tabs.value=tabs.value.filter((value)=>{
    return item.name!==value.name;
  })
  localStorage.setItem("c_tabs",JSON.stringify(tabs.value))
}

function check(item:TabType){
  router.push({
    name:item.name,
  })
  localStorage.setItem("c_tabs",JSON.stringify(tabs.value))
}

function loadTabs(){
  let c_tabs=localStorage.getItem("c_tabs")

  if(c_tabs){
    try {
      tabs.value=JSON.parse(c_tabs)
    } catch (e){
      console.log(e)
    }
  }
}
loadTabs()
function removeAllItem(){
  tabs.value=[
    {name:"home",title:"首页"},
  ]
  router.push({
    name:'home'
  })
  localStorage.setItem("c_tabs",JSON.stringify(tabs.value))
}

watch(()=>route.name,()=>{
  //判断当前路由在不在tabs当中，不在加入进去
  const index=tabs.value.findIndex(value=>value.name==route.name)
  if (index===-1){
    tabs.value.push({
      name:route.name as string,
      title:route.meta.title,
    })
    localStorage.setItem("c_tabs",JSON.stringify(tabs.value))
  }
},{immediate:true})
const slidesCount=ref(50)
onMounted(()=>{







})

</script>

<template>
  <div class="c_tabs">
    <swiper class="c_tabs_swiper" :slides-per-view="slidesCount">
      <swiper-slide v-for="item in tabs" style="width:100%;">
        <div class="item" :class="{active:route.name===item.name}"   @click="check(item)">
          {{item.title}}
          <IconClose @click.stop="removeItem(item)" v-if="item.title!='首页'"></IconClose>
        </div>
      </swiper-slide>
    </swiper>
    <div class="item" @click="removeAllItem" v-if="tabs.length!==1" style="margin-left: 10px">
      删除全部
    </div>
  </div>

</template>

<style lang="less">
.c_tabs{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  .swiper{
    margin-left: 0;
  }

  .swiper-slide{
    width: fit-content !important;
    margin-left:initial;
  }
  .item{
    padding: 3px 8px;
    background-color: var(--color-bg-1);
    border: @c_border;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 5px;
    flex-shrink: 0;

    &:hover{
      background-color: var(--color-fill-1);
    }

    &.active{
      background-color: @primary-6;
      color: white;
    }
  }

}
</style>