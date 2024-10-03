<script setup lang="ts">

import {RefreshRight, Search} from "@element-plus/icons-vue";
import {reactive, ref} from "vue";



const originParams=()=>({
  title:'',
  desc:'',
  tag:[],
  category:'',
  createTime:'',
  currentPage:1,
  pageSize:10,
})

const params=reactive(originParams())

let handleSearch=()=>{
  console.log(params)
}

let handleReset=()=>{
  Object.assign(params, originParams())
}
const tagList=[
  {
    label:'vue',
    value:'vue'
  },
  {
    label:'go',
    value:'go'
  }
]

const categoryList=[
  {
    label:'博客部署',
    value:'博客部署',
  },
  {
    label:"日常",
    value:"日常"
  }
]

const tableData=ref<any>([
  {
    title:'vue快速搭建',
    desc:'一篇文章',
    tag:['vue','go'],
    category:'前端',
    createTime:'2023-03-27',
    cover:'https://env-00jxgjgsarph.normal.cloudstatic.cn/blog/banner1.png'
  }
])
</script>

<template>
<el-card>
  <template #header>
    文章列表
  </template>

  <el-form label-width="72" label-suffix=":" v-model="params">
    <el-row :gutter="20">
      <el-col :sm="8" :sx="12">
        <el-form-item label="标题">
          <el-input v-model="params.title"></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="8" :sx="12">
        <el-form-item label="描述">
          <el-input v-model="params.desc"></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="8" :sx="12">
        <el-form-item label="分类">
          <el-select
              v-model="params.tag"
              placeholder="请选择"
              size="large"
              multiple
          >
            <el-option
                v-for="item in tagList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :sm="8" :sx="12">
        <el-form-item label="标签">
          <el-select
              v-model="params.category"
              placeholder="请选择"
              size="large"
          >
            <el-option
                v-for="item in categoryList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :sm="8" :sx="12">
        <el-form-item label="发布时间">
          <el-date-picker
              v-model="params.createTime"
              type="date"
              placeholder="请选择时间"
          />
        </el-form-item>
      </el-col>
      <el-col :sm="8" :sx="12">
        <el-form-item>
          <el-button type="primary" :icon="Search" @click="handleSearch">搜索</el-button>
          <el-button type="success" :icon="RefreshRight" @click="handleReset">重置</el-button>
        </el-form-item>
      </el-col>
    </el-row>

  </el-form>

  <el-table :data="tableData" style="width: 100%" border>
    <el-table-column type="index" width="60" label="序号" ></el-table-column>
    <el-table-column prop="title" label="标题" width="150" />
    <el-table-column prop="desc" label="描述" width="120" :show-overflow-tooltip='true'/>
    <el-table-column prop="cover" label="封面" width="100">
      <template #default="{row}">
        <div style="display: flex; align-items: center">
          <el-image :src="row.cover" />
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="category" label="分类" width="120" />
    <el-table-column prop="tag" label="标签" width="120" />
    <el-table-column prop="createTime" label="创建时间" width="120" />
    <el-table-column fixed="right" label="操作" min-width="120">
      <template #default>
        <el-button link type="primary" size="small" @click="handleClick">
          删除
        </el-button>
        <el-button link type="primary" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      v-model:current-page="originParams.currentPage"
      v-model:page-size="originParams.pageSize"
      :page-sizes="[10, 20, 30, 40]"
      :background="true"
      layout="total, sizes, prev, pager, next, jumper"
      :total="20"
      @change="handleSearch"
  />
</el-card>
</template>

<style scoped>

</style>