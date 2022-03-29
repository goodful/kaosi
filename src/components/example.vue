<template>
  <div>
    <el-card>
      <div slot="header">多层级路由示例</div>
      <div>
        <el-button type="primary" @click="dialogVisible = true">
          携带参数打开下级路由，并且携带的参数在面包屑每一级正确导航，刷新浏览器也可使用</el-button
        >
        <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
        >
          <span>这是一段信息</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false"
              >确 定</el-button
            >
          </span>
        </el-dialog>
        <p>
          使用场景为某一列表的详情页面关联的数据详情的详情的详情的详情，每一层级都有参数，返回和刷新浏览器面包屑都能正确导航
        </p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "example",
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>
<style scoped>
</style>