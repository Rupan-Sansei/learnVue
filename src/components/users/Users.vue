<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }"> 首页 </el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card>
      <!-- 搜索与添加 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input
            v-model="queryinfo.query"
            placeholder="请输入内容"
            clearable
          >
            <el-button slot="append" icon="el-icon-search" />
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="dialogVisible = true">
            添加用户
          </el-button>
        </el-col>
      </el-row>
      <!-- 表格 -->
      <el-table :data="userlist" stripe border>
        <el-table-column type="index" />
        <el-table-column label="姓名" prop="usename" />
        <el-table-column label="邮箱" prop="email" />
        <el-table-column label="电话" prop="mobile" />
        <el-table-column label="角色" prop="role_name" />
        <el-table-column label="状态" prop="mg_state">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.mg_state" />
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180px">
          <template>
            <el-button type="primary" icon="el-icon-edit" size="mini" />
            <el-button type="danger" icon="el-icon-delete" size="mini" />
            <el-tooltip
              effect="dark"
              content="分配权限"
              placement="top"
              :enterable="false"
            >
              <el-button type="warning" icon="el-icon-setting" size="mini" />
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page="queryinfo.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="queryinfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
    <el-dialog title="添加用户" :visible.sync="dialogVisible" width="50%">
      <el-form
        :model="addform"
        :rules="addrules"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名称" prop="usename">
          <el-input v-model="addform.usename"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addform.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addform.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="addform.phone"></el-input>
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
      list: [],
      userlist: [
        {
          usename: "曹尼玛",
          email: "1012451231@qq.com",
          mobile: "2132132135",
          role_name: "大财主",
          mg_state: true,
        },
        {
          usename: "尼玛曹",
          email: "1mnhgf@qq.com",
          mobile: "5586435",
          role_name: "小财主",
          mg_state: false,
        },
        {
          usename: "玛曹尼",
          email: "vxcvxcvxcv31@qq.com",
          mobile: "2369665",
          role_name: "农夫",
          mg_state: true,
        },
        {
          usename: "康尼玛",
          email: "2315asdasd31@qq.com",
          mobile: "97415565",
          role_name: "小偷",
          mg_state: true,
        },
        {
          usename: "康尼玛",
          email: "xcvfca@qq.com",
          mobile: "110",
          role_name: "大财主",
          mg_state: true,
        },
      ],
      queryinfo: {
        query: "",
        // 当前页数
        pagenum: 1,
        // 每页显示数
        pagesize: 2,
      },
      total: 5,
      dialogVisible: false,
      addform: {
        usename: "",
        password: "",
        email: "",
        phone: "",
      },
      addrules: {
        usename: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        phone: [{ required: true, message: "请输入电话", trigger: "blur" }],
      },
    };
  },
  methods: {
    // 监听pagesize变化
    handleSizeChange(newsize) {
      console.log(newsize);
    },
    // 监听页码值
    handleCurrentChange(newpage) {
      console.log(newpage);
    },
    async getlist() {
      // const a = await this.$http.get("http://localhost:3000/api/users/list");
      this.list = a.data.data.lists;
    },
  },
  created() {
    this.getlist();
  },
};
</script>

<style lang="less" scoped>
</style>
