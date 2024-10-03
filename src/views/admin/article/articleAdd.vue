<script setup lang="ts">
import {reactive, ref} from 'vue'

import {MdEditor} from "md-editor-v3";
import 'md-editor-v3/lib/style.css';
import {ElMessage} from "element-plus";
import {Plus} from "@element-plus/icons-vue";



let originArticle=()=>({
  title:'',
  content:'',
  tag:[],
  category:'',
  cover:'',
  desc:'',
})

let articleForm=ref(originArticle());
let ruleFormRef=ref(null);
let ruleFormRef1=ref(null);
let rules1=reactive({
  title:[
    { required: true, message: '请输入文章标题', trigger: 'blur' }
  ],
  content:[
    { required: true, message: '请输入文章内容', trigger: 'blur' }
  ],

})

let rules2=reactive({
  tag:[
    { required: true, message: '请选择标签', trigger: 'blur' }
  ],
  category:[
    { required: true, message: '请选择分类', trigger: 'blur' }
  ],
  desc:[
    { required: true, message: '请输入文章描述', trigger: 'blur' }
  ],
  cover:[
    { required: true, message: '请上传封面', trigger: 'blur' }
  ]
})

const submitForm = () => {
  ruleFormRef.value.validate((valid) => {
    if (valid) {
      dialogVisible.value = true;
    } else {
      console.log(articleForm.value)
      ElMessage.error('请根据提示完善文章信息.')
    }
  })
}

const dialogVisible=ref(false);

const handleClose=()=>{
  dialogVisible.value = false;
  Object.assign(articleForm.value,originArticle())
}


const submit=()=>{
  ruleFormRef1.value.validate((valid) => {
    if (valid) {
      //提交
      handleClose()
    } else {
      ElMessage.error('请根据提示完善文章信息.')
    }
  })
}

let tagList=["go","vue"]
let categoryList=["前端","后端","日常"]



</script>

<template>
<el-card header="新增文章">
  <el-form
      :model="articleForm"
      ref="ruleFormRef"
      :rules="rules1"
      label-position="left"
  >
    <div class="flex">
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="articleForm.title"></el-input>
      </el-form-item>
      <el-button @click="submitForm()" type="success" class="ml-[20px]">新增</el-button>
    </div>
    <el-form-item prop="content">
      <md-editor v-model="articleForm.content"></md-editor>
    </el-form-item>
  </el-form>
  <el-dialog
      v-model="dialogVisible"
      title="文章新增"
      :before-close="handleClose"
      width="500"
  >
    <el-form
        :model="articleForm"
        ref="ruleFormRef1"
        :rules="rules2"
        label-suffix=":"
        label-width="100"
    >
      <el-form-item label="文章标题">
        {{articleForm.title}}
      </el-form-item>
      <el-form-item prop="desc" label="文章描述" >
        <el-input v-model="articleForm.desc"
                  style="width: 400px"
                  :rows="2"
                  type="textarea"
                  placeholder="请输入文章描述"
        ></el-input>
      </el-form-item>
      <el-form-item label="分类" prop="category" >
        <el-select
            v-model="articleForm.category"
            size="large">
          <el-option
              v-for="item in categoryList"
              :key="item"
              :label="item"
              :value="item"
          />

        </el-select>
      </el-form-item>
      <el-form-item label="标签" prop="tag" >
        <el-select
            v-model="articleForm.tag"
            size="large"
            multiple
            clearable
        >
          <el-option
              v-for="item in tagList"
              :key="item"
              :label="item"
              :value="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="封面"  prop="cover">
        <el-upload
            v-model:file-list="articleForm.cover"
            list-type="picture-card"
            :auto-upload="false"
            :limit="1"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>

      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="submit()">
          提交
        </el-button>
      </div>
    </template>
  </el-dialog>

</el-card>

</template>

<style scoped>

</style>