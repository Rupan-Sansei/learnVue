<template>
    <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card>
        <el-table :data="rightslist" stripe border>
            <el-table-column type="index"></el-table-column>
            <el-table-column label="权限名称" prop="name"></el-table-column>
            <el-table-column label="路径" prop="path"></el-table-column>
            <el-table-column label="权限等级" prop="grade">
                <template slot-scope="scocp">
                    <el-tag v-if="scocp.row.grade == 1">一级</el-tag>
                    <el-tag type="success" v-else-if="scocp.row.grade == 2">二级</el-tag>
                    <el-tag type="info" v-else-if="scocp.row.grade == 3">三级</el-tag>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
    </div>
</template>

<script>
export default {
    data(){
        return {
            rightslist:[
                {
                    name:'商品管理',
                    path:'goods',
                    grade:1
                },
                {
                    name:'订单管理',
                    path:'orders',
                    grade:1
                },
                {
                    name:'权限管理',
                    path:'rights',
                    grade:1
                },
                {
                    name:'商品列表',
                    path:'goods',
                    grade:2
                },
                {
                    name:'添加商品',
                    path:'goods',
                    grade:3
                },
                {
                    name:'订单列表',
                    path:'orders',
                    grade:2
                },
                {
                    name:'添加订单',
                    path:'orders',
                    grade:3
                },
                {
                    name:'用户列表',
                    path:'users',
                    grade:2
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>

</style>