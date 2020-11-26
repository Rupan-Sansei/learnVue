<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>分类参数</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 图片视图 -->
    <el-card>
      <!-- 提示信息 -->
      <el-alert
        title="注意：只允许为第三集分类设置相关参数"
        type="warning"
        show-icon
        :closable="false"
      ></el-alert>
      <el-row class="top">
        <el-col>
          <span>选择商品分类：</span>
          <el-cascader
            :options="catelist"
            :props="cascaderProps"
            :show-all-levels="false"
            clearable
            v-model="cascader"
            @change="change"
          ></el-cascader>
        </el-col>
      </el-row>
      <el-tabs v-model="activeName" >
        <el-tab-pane label="动态参数" name="first">
          <el-row><el-button type="primary" size="mini" :disabled='isabled'>添加参数</el-button></el-row>
          <el-table :data="showdata" border stripe >
            <el-table-column type='index'></el-table-column>
            <el-table-column label="参数名称" prop="name"></el-table-column>
            <el-table-column label="参数名称">
              <template>
                <el-button size="mini" type="primary" icon="el-icon-edit">编辑</el-button>
                <el-button size="mini" type="danger" icon="el-icon-delete">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="静态属性" name="second">
          <el-row><el-button type="primary" size="mini" :disabled='isabled'>添加属性</el-button></el-row>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      catelist: [
        {
          id: 1,
          name: "大家电",
          isture: true,
          order: 1,
          children: [
            {
              id: 11,
              name: "电视",
              isture: true,
              order: 2,
            },
          ],
        },
        {
          id: 2,
          name: "热门推荐",
          isture: true,
          order: 1,
          children: [],
        },
        {
          id: 3,
          name: "海外购",
          isture: true,
          order: 1,
          children: [],
        },
      ],
      // 选择器配置
      cascaderProps: {
        value: "id",
        label: "name",
        children: "children",
      },
      activeName:'first',
      cascader:'',
      showdata:[],
      isabled:true
    };
  },
  methods:{
    change(){
      console.log(this.cascader.length);
      if(this.cascader.length!==2) {
        this.showdata=[]
        this.isabled = true
      }else{
        this.isabled = false
        this.showdata = this.catelist
      }
      
    }
  }
};
</script>

<style lang="less" scoped>
.top {
  margin-top: 15px;
}
</style>