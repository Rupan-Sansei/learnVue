<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 图片视图 -->
    <el-card>
      <el-row>
        <el-col :span="8">
          <el-input
            placeholder="请输入内容"
            v-model="input3"
            class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <el-table border stripe>
            <el-table-column type="index"></el-table-column>
            <el-table-column label="订单编号"></el-table-column>
            <el-table-column label="订单价格"></el-table-column>
            <el-table-column label="是否付款"></el-table-column>
            <el-table-column label="是否发送"></el-table-column>
            <el-table-column label="下单时间"></el-table-column>
            <el-table-column label="操作"></el-table-column>
        </el-table>
        <el-pagination
        :current-page="queryinfo.page"
        :page-sizes="[2, 5, 10, 20]"
        :page-size="queryinfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryinfo: {
        qurey: "",
        pagesize: 2,
        page: 1,
      },
      total: 3,
      input3:''
    };
  },
};
</script>

<style lang="less" scoped>
</style>