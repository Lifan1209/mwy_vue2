<template>
  <div>
    <div>
      <span style="line-height: 40px; margin-left: 6%; font-size: 20px"><b>原始文本</b></span>
      <el-table
          :data="oritext"
          style="width: 90%; margin-left: 5%"
          border>
        <el-table-column
            prop="filename"
            label="文件名"
            width="250">
        </el-table-column>
        <el-table-column
            prop="description"
            label="文件描述"
            width="845"
        >
        </el-table-column>
        <el-table-column
            fixed="right"
            width="250"
            label="操作">
          <template #default="scope">
            <el-button type="plain" size="small">查看</el-button>
            <el-button type="primary" size="small">生成词向量</el-button>
            <el-button @click="handleClick(scope.row)" type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="margin-top: 30px">
      <span style="line-height: 40px; margin-left: 6%; font-size: 20px"><b>词嵌入</b></span>
      <el-table
          :data="embeddings"
          style="width: 90%; margin-left: 5%"
          border>
        <el-table-column
            prop="filename"
            label="文件名"
            width="250">
        </el-table-column>
        <el-table-column
            prop="description"
            label="文件描述"
            width="845"
        >
        </el-table-column>
        <el-table-column
            fixed="right"
            width="250"
            label="操作">
          <template #default="scope">
            <el-button type="plain" size="small">查看</el-button>
            <el-button type="primary" size="small">下载</el-button>
            <el-button @click="handleClick(scope.row)" type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "data_handler",
  data() {
    return {
      oritext: [
        {
          filename: 'text1.txt',
          description: '王小虎',
        },
        {
          filename: 'text2.txt',
          description: '王小虎',
        },
        {
          filename: 'text3.txt',
          description: '王小虎',
        },
        {
          filename: 'text4.txt',
          description: '王小虎',
        }],
      embeddings: [
        {
          filename: 'text1.txt',
          description: '王小虎',
        },
        {
          filename: 'text2.txt',
          description: '王小虎',
        },
        {
          filename: 'text3.txt',
          description: '王小虎',
        },
        {
          filename: 'text4.txt',
          description: '王小虎',
        }],
    }
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },


}
</script>

<style scoped>

</style>