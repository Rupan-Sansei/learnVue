<template>
  <el-container class="full">
    <el-header>
      <div>
        <img src="../assets/鲁邦.png" alt="" />
        <span>鲁邦电商管理系统</span>
      </div>
      <router-link to="login">
        <el-button type="info"> 退出 </el-button>
      </router-link>
    </el-header>
    <el-container>
      <el-aside :width="iscollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="small">|||</div>
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff"
          :collapse="iscollapse"
          :collapse-transition="false"
          unique-opened
          router
          :default-active="active"
        >
          <!-- 一级菜单 -->
          <el-submenu
            v-for="itme in meunlist"
            :key="itme.id"
            :index="itme.id + ''"
          >
            <!-- 一级菜单模板 -->
            <template slot="title">
              <i :class="icon[itme.id]" />
              <span>{{ itme.name }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              v-for="submenu in itme.children"
              :key="submenu.id"
              :index="'/' + submenu.path"
              @click="saveNavstate('/' + submenu.path)"
            >
              <template slot="title">
                <i class="el-icon-menu" />
                <span>{{ submenu.name }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      meunlist: [
        {
          name: "用户管理",
          id: 1,
          children: [
            {
              name: "用户列表",
              id: 11,
              path: "users",
            },
          ],
        },
        {
          name: "权限管理",
          id: 2,
          children: [
            {
              name: "角色列表",
              id: 21,
              path: "roles",
            },
            {
              name: "权限列表",
              id: 22,
              path: "rights",
            },
          ],
        },
        {
          name: "商品管理",
          id: 3,
          children: [
            {
              name: "商品列表",
              id: 31,
              path: "goods",
            },
            {
              name: "分类参数",
              id: 32,
              path: "params",
            },
            {
              name: "商品分类",
              id: 33,
              path: "categories",
            },
          ],
        },
        {
          name: "订单管理",
          id: 4,
          children: [
            {
              name: "订单列表",
              id: 11,
              path: "order",
            },
          ],
        },
        {
          name: "数据统计",
          id: 5,
          children: [
            {
              name: "数据列表",
              id: 11,
              path: "shuju",
            },
          ],
        },
        {
          name: "doem",
          id: 6,
          children: [
            {
              name: "公司组织架构",
              id: 11,
              path: "pic",
            },
          ],
        },
      ],
      iscollapse: false,
      icon: {
        1: "el-icon-user-solid",
        2: "el-icon-key",
        3: "el-icon-s-goods",
        4: "el-icon-s-order",
        5: "el-icon-data-analysis",
        6: "el-icon-notebook-2",
      },
      active: "",
    };
  },
  created() {
    this.active = window.sessionStorage.getItem("activepath");
  },
  methods: {
    small() {
      this.iscollapse = !this.iscollapse;
    },
    saveNavstate(activepath) {
      window.sessionStorage.setItem("activepath", activepath);
      this.active = activepath;
    },
  },
};
</script>

<style lang="less" scoped>
.full {
  height: 100%;
}
.el-header {
  display: flex;
  color: #fff;
  font-size: 20px;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  background-color: #373d41;
  div {
    display: flex;
    align-items: center;
  }
  span {
    margin-left: 10px;
  }
}
.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
img {
  height: 60px;
  width: auto;
  border-radius: 50%;
}
i {
  margin-right: 10px;
}
.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
}
</style>
