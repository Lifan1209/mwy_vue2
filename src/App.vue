<template>
  <el-container>
    <el-header
        style="background: #660874;color: white;font-family: '微软雅黑';font-size: 30px;padding-top: 6px;padding-left: 40px">
      公平NLP算法库
    </el-header>
    <el-container>
      <el-aside width="150px">
        <el-col  style="margin-top: 20px">
          <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              style="text-align: center"
              @select="handleSelect">
            <el-menu-item route="/home" index="1">
              <i class="el-icon-document"></i>
              <span slot="title" >首页</span>
            </el-menu-item>
            <el-menu-item route="/data_handler" index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">数据处理</span>
            </el-menu-item>
            <el-menu-item route="/algorithms" index="3">
              <i class="el-icon-document"></i>
              <span slot="title">算法集成</span>
            </el-menu-item>
            <el-menu-item route="/evaluation" index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">结果评估</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main>
        <home v-if="activeIndex==='1'"></home>
        <data_handler v-if="activeIndex==='2'"></data_handler>
        <algorithms v-if="activeIndex==='3'"></algorithms>
        <evaluation v-if="activeIndex==='4'"></evaluation>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

import Home from "@/components/home";
import Data_handler from "@/components/data_handler";
import Algorithms from "@/components/algorithms";
import Evaluation from "@/components/evaluation";

export default {
  name: 'App',
  components: {
    Evaluation,
    Algorithms,
    Data_handler,
    Home

  },
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex=key
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
