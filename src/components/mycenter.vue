<template>
  <div>
    <h1>我的个人中心</h1>
    <el-descriptions title="用户信息">
      <el-descriptions-item label="用户名">admin</el-descriptions-item>
      <el-descriptions-item label="手机号">17633880923</el-descriptions-item>
      <el-descriptions-item label="居住地">北京市</el-descriptions-item>
      <el-descriptions-item label="备注">
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="联系地址"
        >昌平区南口镇南大街21号</el-descriptions-item
      >
    </el-descriptions>
  </div>
</template>

<script>
export default {
  name: "mycenter",
  methods: {},
};
</script>
<style scoped>
</style>