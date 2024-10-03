<script setup lang="ts">


import {getSettings,updateSettings} from "@/api/admin/settings_api"
import {onMounted,reactive,ref} from "vue";
import { ElMessageBox } from 'element-plus'
import type { DrawerProps } from 'element-plus'

let data = ref({})
let form =ref({})
const drawer = ref(false)

// 初始化 form
const initializeForm = () => {
  form.value = { ...data.value };
};



const direction = ref<DrawerProps['direction']>('rtl')
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('是否取消修改?')
      .then(() => {
        done()
      })
      .catch(() => {
        // catch error
      })
}

onMounted(async ()=>{
  // 获取数据
  await getInfo()
  await initializeForm();
  console.log(data.value)

})

let getInfo=async ()=>{
  await getSettings("site").then(res=>{
    data.value=res.data.data
  })
}


let settingsUpdate = async ()=>{
  await updateSettings("site",form.value).then(res=>{
    console.log(res)
    drawer.value=false
  })
  await getInfo()

}

</script>

<template>
<div class="settings-view">
  <el-card>
    <div>网站名称：{{data.title}}</div>
    <div>用户名称：{{data.name}}</div>
    <div>创建时间：{{data.created_at}}</div>
    <div>备案号·：{{data.bei_an}}</div>
    <div>QQ：{{data.qq_image}}</div>
    <div>版本：{{data.version}}</div>
    <div>邮箱：{{data.email}}</div>
    <div>微信：{{data.wechat_image}}</div>
    <div>职位：{{data.job}}</div>
    <div>地址：{{data.addr}}</div>
    <div>官网地址：{{data.web}}</div>
    <div>BiliBili：<a :href="data.bilibili_url">{{data.bilibili_url}}</a></div>
    <div>Github：<a :href="data.github_url">{{data.github_url}}</a></div>
  </el-card>
  <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
    修改
  </el-button>
  <el-drawer
      v-model="drawer"
      title="修改网站配置信息"
      :direction="direction"
      :before-close="handleClose"
  >

    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="网站名称">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="用户名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="创建时间">
        <el-input v-model="form.created_at" />
      </el-form-item>
      <el-form-item label="备案号">
        <el-input v-model="form.bei_an" />
      </el-form-item>
      <el-form-item label="QQ">
        <el-input v-model="form.qq_image" />
      </el-form-item>
      <el-form-item label="版本">
        <el-input v-model="form.version" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="微信">
        <el-input v-model="form.wechat_image" />
      </el-form-item>
      <el-form-item label="职位">
        <el-input v-model="form.job" />
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="form.addr" />
      </el-form-item>
      <el-form-item label="官网地址">
        <el-input v-model="form.web" />
      </el-form-item>
      <el-form-item label="BiliBili">
        <el-input v-model="form.bilibili_url" />
      </el-form-item>
      <el-form-item label="Github">
        <el-input v-model="form.github_url" />
      </el-form-item>
    </el-form>
    <el-form-item>
      <el-button type="primary" @click="settingsUpdate">提交</el-button>
      <el-button @click="form={}">清空</el-button>
    </el-form-item>
  </el-drawer>

</div>
</template>

<style scoped>

</style>