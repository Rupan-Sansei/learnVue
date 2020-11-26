<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 图片视图 -->
    <el-card>
      <el-row>
        <el-col
          ><el-button type="primary" @click="dialogVisible = true"
            >添加分类</el-button
          ></el-col
        >
      </el-row>
      <!-- 列表模块 -->
      <tree-table
        class="treetable"
        :data="catelist"
        :columns="columns"
        :selection-type="false"
        :expand-type="false"
        show-index
        border
        show-row-hover
      >
        <!-- 是否有效表格模块 -->
        <template slot="isok" slot-scope="scope">
          <i
            class="el-icon-success"
            v-if="(scope.row.isture = true)"
            style="color: lightgreen"
          ></i>
          <i style="color: red" class="el-icon-error" v-else></i>
        </template>

        <!-- 排序表格模块 -->
        <template slot="order" slot-scope="scope">
          <el-tag v-if="scope.row.order == 1">一级</el-tag>
          <el-tag type="success" v-else-if="scope.row.order == 2">二级</el-tag>
          <el-tag type="info" v-else>三级</el-tag>
        </template>

        <!-- 操作表格模块 -->
        <template slot="eidt">
          <el-button type="primary" icon="el-icon-edit" size="mini"
            >编辑</el-button
          >
          <el-button type="danger" icon="el-icon-delete" size="mini"
            >删除</el-button
          >
        </template>
      </tree-table>

      <!-- 分页模块 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryinfo.page"
        :page-sizes="[2, 5, 10, 20]"
        :page-size="queryinfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <!-- 添加分类 -->
    <el-dialog title="添加分类" :visible.sync="dialogVisible" width="50%">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="添加分类: " prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="父级分类: ">
          <el-cascader
            :options="catelist"
            :props="cascaderProps"
            expand-trigger="hover"
            clearable
            v-model="ruleForm.bigname"
          ></el-cascader>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
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
      //   配置treetable每一列
      columns: [
        {
          label: "分类名称",
          prop: "name",
        },
        {
          label: "是否有效",
          type: "template",
          template: "isok",
        },
        {
          label: "排序",
          prop: "order",
          type: "template",
          template: "order",
        },
        {
          label: "操作",
          type: "template",
          template: "eidt",
        },
      ],
      //   查询信息
      queryinfo: {
        qurey: "",
        pagesize: 2,
        page: 1,
      },
      total: 3,
      dialogVisible: false,
      //   级联器配置对象
      cascaderProps: {
        value: "id",
        label: "name",
        children: "children",
      },
      ruleForm: {
        name: "",
        bigname: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleSizeChange(newsize) {
      this.queryinfo.pagesize = newsize;
      console.log(newsize);
    },
    handleCurrentChange(newpage) {
      this.queryinfo.page = newpage;
      console.log(newpage);
    },
  },
};
</script>

<style lang="less" scoped>
.treetable {
  margin-top: 15px;
}
.el-cascader {
  width: 100%;
}
</style>