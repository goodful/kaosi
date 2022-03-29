<template>
  <el-container>
    <el-aside
      width="280px"
      style="text-align: left; height: 100vh; background-color: #222d32"
    >
      <el-menu
        @select="menuSelect"
        background-color="#222d32"
        text-color="white"
        active-text-color="#blue"
      >
        <div
          class="logo"
          style="
            height: 50px;
            line-height: 50px;
            text-align: center;
            background: #0079d9;
            color: white;
          "
        >
          ElementUI管理系统
        </div>
        <router-link to="/homepage"
          ><el-menu-item index="1"
            ><i class="el-icon-menu"></i>首页</el-menu-item
          ></router-link
        >
        <el-submenu index="2">
          <template slot="title"
            ><i class="el-icon-document"></i>文章管理</template
          >
          <router-link to="/textlist"
            ><el-menu-item index="2-1" style="padding-left: 60px"
              >文章列表</el-menu-item
            ></router-link
          >
          <router-link to="/example"
            ><el-menu-item index="2-2" style="padding-left: 60px"
              >多层级路由示例</el-menu-item
            ></router-link
          >
        </el-submenu>
      </el-menu>
      <div
        class="logo"
        style="
          width: 280px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          background: #0079d9;
          color: white;
          position: absolute;
          bottom: 0;
        "
      >
        <i class="el-icon-back"></i>
      </div>
    </el-aside>
    <el-container>
      <el-header style="height: 50px; line-height: 50px; padding-top: 0"
        ><i class="el-icon-loading"></i><i class="el-icon-s-tools"></i
        ><i class="el-icon-message-solid"></i>
        <el-dropdown>
          <span class="el-dropdown-link" style="color:white;margin-left:10px">
            Admin<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/mycenter"><el-dropdown-item>个人中心</el-dropdown-item></router-link>
            <router-link to="/"><el-dropdown-item>退出系统</el-dropdown-item></router-link>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.el-menu-item {
  padding-left: 200px;
  text-align: left;
}
.el-menu > *:first-child {
  text-align: left;
}
* {
  margin: 0;
  padding: 0;
}
i {
  padding-left: 10px;
}
.el-header {
  background-color: #0086f1;
  color: #333;
  color:white;
  display:flex;
  align-items:center;
  justify-content:flex-end;
}
.el-header>*{
  margin:0 5px;
}

.el-aside {
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 90vh;
  overflow: scroll;
}
</style>
