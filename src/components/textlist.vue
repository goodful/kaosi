<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column
        prop="title"
        label="文章标题"
        width="180"
      ></el-table-column>
      <el-table-column prop="author" label="作者" width="180">
      </el-table-column>
      <el-table-column prop="see" label="浏览量"> </el-table-column>
      <el-table-column prop="answer" label="回复"> </el-table-column>
      <el-table-column prop="make" label="操作"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "textlist",
  data() {
    return {
      tableData: [
        {
          title: "中国 npm 镜像源升级公告",
          author: "fengmk2",
          see: "46591",
          answer:"12",
          make:"删除"
        },
        {
          title: "中国 npm 镜像源升级公告",
          author: "fengmk2",
          see: "46591",
          answer:"12",
          make:"删除"
        },
        {
         title: "中国 npm 镜像源升级公告",
          author: "fengmk2",
          see: "46591",
          answer:"12",
          make:"删除"
        },
        {
          title: "中国 npm 镜像源升级公告",
          author: "fengmk2",
          see: "46591",
          answer:"12",
          make:"删除"
        },
      ],
    };
  },
  methods: {},
};
</script>
<style scoped>
</style>