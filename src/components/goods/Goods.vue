<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 图片视图 -->
    <el-card>
      <!-- 搜索框 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input
            v-model="query"
            placeholder="请输入内容"
            clearable
          >
            <el-button
              slot="append"
              icon="el-icon-search"
            />
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" >
            添加用户
          </el-button>
        </el-col>
      </el-row>
      <!-- 表格 -->
      <el-table :data="goodslist" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="商品名称" prop="name"></el-table-column>
        <el-table-column label="商品价格（元）" prop="price" width="120px"></el-table-column>
        <el-table-column label="商品重量" prop="weight" width="100px"></el-table-column>
        <el-table-column label="创建时间" prop="time" width="190px"></el-table-column>
        <el-table-column label="操作" width="200px">
          <template>
            <el-button size="mini" type="primary" icon="el-icon-edit">编辑</el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete">删除</el-button>
          </template>
        </el-table-column>
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
  data(){
    return {
      queryinfo: {
        qurey: "",
        pagesize: 2,
        page: 1,
      },
      total: 3,
      goodslist:[
        {
          name:'外星人',
          price:11000,
          weight:50,
          time:"1970-01-18 20:37:39"
        },
        {
          name:'联想拯救者r700',
          price:3000,
          weight:50,
          time:"1970-01-18 04:37:39"
        },
        {
          name:'外星人1',
          price:11000,
          weight:50,
          time:"1970-01-18 20:37:39"
        },
        {
          name:'华硕',
          price:12000,
          weight:50,
          time:"1970-01-18 20:37:39"
        },
      ]
    }
  }
};
</script>

<style lang="less" scoped>
</style>