<template>
  <div>
    <el-card>
      <div slot="header">项目涉及知识</div>
      <div>
        <div class="block">
          <el-carousel height="150px" style="background:gray">
            <el-carousel-item v-for="item in img" :key="item" style="line-height:150px;color:white;font-size:20px">
              <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>elementui组件</span>
      </div>
      <div>
        <div class="block">
          <span class="demonstration">默认不区分颜色</span>
          <el-rate v-model="value1"></el-rate>
        </div>
        <el-steps :active="1">
          <el-step
            title="步骤 1"
            description="这是一段很长很长很长的描述性文字"
          ></el-step>
          <el-step
            title="步骤 2"
            description="这是一段很长很长很长的描述性文字"
          ></el-step>
          <el-step title="步骤 3" description="这段就没那么长了"></el-step>
        </el-steps>
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
        <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        <el-row>
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
        </el-row>
        <el-row>
          <el-button icon="el-icon-search" circle></el-button>
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="success" icon="el-icon-check" circle></el-button>
          <el-button type="info" icon="el-icon-message" circle></el-button>
          <el-button type="warning" icon="el-icon-star-off" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="禁用" disabled></el-checkbox>
          <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group></div
    ></el-card>
  </div>
</template>

<script>
export default {
  name: "homepage",
  data() {
    return {
      checkList: ["选中且禁用", "复选框 A"],
      radio: "1",
      num: 1,
      img:["router","elementui","mock","axios"]
    };
  },
  methods: {
      handleChange(value) {
        console.log(value);
      }
  },
};
</script>
<style scoped>
.el-card {
  margin-top: 20px;
}
</style>