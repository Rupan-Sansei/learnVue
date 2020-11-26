<template>
    <div>
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>权限管理</el-breadcrumb-item>
            <el-breadcrumb-item>角色列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 卡片视图 -->
        <el-card>
            <el-button type="primary">添加角色</el-button>
            <el-table border stripe :data="roleslist">
                <!-- 扩展列 -->
                <el-table-column type="expand">
                    <template slot-scope="scocp">
                        <el-row :class="['bdottom', i1 == 0 ?'bdtop':'','vcenter']" v-for="(itme1, i1) in scocp.row.children" :key="itme1.id">
                            <!-- 一级渲染 -->
                            <el-col :span="5">
                                <el-tag closable>{{itme1.authname}}</el-tag>
                                <i class='el-icon-caret-right'></i>
                            </el-col>
                            <!-- 二级和三级渲染 -->
                            <el-col :span="19">
                                <el-row :class="[ i2 == 0 ?'':'bdtop','vcenter']" v-for="(itme2, i2) in itme1.children" :key="itme2.id">
                                    <el-col :span="6">
                                        <el-tag type="success" closable>{{itme2.authname}}</el-tag>
                                        <i class='el-icon-caret-right'></i>
                                    </el-col>
                                    <el-col :span="18">
                                        <el-tag type="warning" v-for="(itme3) in itme2.children" :key="itme3.id" closable>{{itme3.authname}}</el-tag>
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                    </template>
                </el-table-column>
                <!-- 索引列 -->
                <el-table-column type="index"></el-table-column>
                <el-table-column label="角色管理" prop="rolename"></el-table-column>
                <el-table-column label="角色描述" prop="roledesc"></el-table-column>
                <el-table-column label="操作" width='300px'>
                    <template>
                        <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
                        <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
                        <el-button type="warning" icon="el-icon-setting" size="mini" @click="dialogVisible = true">分配权限</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <el-dialog title="分配权限" :visible.sync="dialogVisible" width="50%" >
            <el-tree :data="roleslist" :props="treeprops" show-checkbox node-key="id" default-expand-all
            :default-expanded-keys="defkey"></el-tree>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return {
            roleslist:[
                //第一个数据
                {
                    rolename:'主管',
                    roledesc:'技术负责人',
                    children:[
                        {
                            id:'1',
                            authname:'商品管理',
                            children:[
                                {
                                    id:'11',
                                    authname:'商品列表',
                                    children:[
                                        {
                                        id:'111',
                                        authname:'商品修改',
                                        }
                                    ]
                                },
                                {
                                    id:'12',
                                    authname:'分类参数',
                                    children:[
                                        {
                                        id:'121',
                                        authname:'获取分类参数列表'
                                        },
                                        {
                                        id:'122',
                                        authname:'创建商品参数'
                                        },
                                        {
                                        id:'123',
                                        authname:'删除商品参数'
                                        }
                                    ]
                                },
                                {
                                    id:'13',
                                    authname:'商品分类',
                                    children:[
                                        {
                                        id:'131',
                                        authname:'添加分类',
                                        },
                                        {
                                        id:'132',
                                        authname:'删除分类',
                                        },
                                        {
                                        id:'133',
                                        authname:'获取分类详情',
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            id:'2',
                            authname:'订单管理',
                            children:[
                                {
                                    id:'21',
                                    authname:'订单列表',
                                    children:[
                                        {
                                        id:'211',
                                        authname:'添加订单',
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id:'3',
                            authname:'权限管理',
                            children:[
                                {
                                    id:'31',
                                    authname:'角色列表',
                                    children:[
                                        {
                                        id:'311',
                                        authname:'添加角色',
                                        },
                                        {
                                        id:'312',
                                        authname:'删除角色',
                                        },
                                        {
                                        id:'313',
                                        authname:'取消角色授权',
                                        },
                                        {
                                        id:'314',
                                        authname:'获取角色列表',
                                        },
                                        {
                                        id:'315',
                                        authname:'获取角色详情',
                                        },
                                        {
                                        id:'316',
                                        authname:'更新角色信息',
                                        },
                                        {
                                        id:'317',
                                        authname:'更新角色权限',
                                        },
                                        
                                    ]
                                },
                                {
                                    id:'32',
                                    authname:'权限列表',
                                    children:[
                                        {
                                        id:'321',
                                        authname:'查看权限',
                                        }
                                    ]

                                }
                            ]
                        },
                        {
                            id:'4',
                            authname:'用户管理',
                            children:[
                                {
                                    id:'41',
                                    authname:'用户列表',
                                    children:[
                                        {
                                        id:'411',
                                        authname:'添加用户',
                                        },
                                        {
                                        id:'412',
                                        authname:'删除用户',
                                        },
                                        {
                                        id:'413',
                                        authname:'更新用户',
                                        },
                                        {
                                        id:'414',
                                        authname:'获取用户详情',
                                        },
                                        {
                                        id:'415',
                                        authname:'分配用户角色',
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            id:'5',
                            authname:'数据统计',
                            children:[
                                {
                                    id:'51',
                                    authname:'数据报表',
                                    children:[
                                        {
                                            id:'511',
                                            authname:'查看数据'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                //第二个数据
                 {
                    rolename:'测试角色',
                    roledesc:'测试角色描述',
                    children:[
                        {
                            id:'1',
                            authname:'商品管理',
                            children:[
                                {
                                    id:'11',
                                    authname:'商品列表',
                                    children:[
                                        {
                                        id:'111',
                                        authname:'商品修改',
                                        }
                                    ]
                                },
                                {
                                    id:'12',
                                    authname:'分类参数',
                                    children:[
                                        {
                                        id:'121',
                                        authname:'获取分类参数列表'
                                        },
                                        {
                                        id:'122',
                                        authname:'创建商品参数'
                                        },
                                        {
                                        id:'123',
                                        authname:'删除商品参数'
                                        }
                                    ]
                                },
                                {
                                    id:'13',
                                    authname:'商品分类',
                                    children:[
                                        {
                                        id:'131',
                                        authname:'添加分类',
                                        },
                                        {
                                        id:'132',
                                        authname:'删除分类',
                                        },
                                        {
                                        id:'133',
                                        authname:'获取分类详情',
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            id:'2',
                            authname:'订单管理',
                            children:[
                                {
                                    id:'21',
                                    authname:'订单列表',
                                    children:[
                                        {
                                        id:'211',
                                        authname:'添加订单',
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id:'3',
                            authname:'权限管理',
                            children:[
                                {
                                    id:'31',
                                    authname:'角色列表',
                                    children:[
                                        {
                                        id:'311',
                                        authname:'添加角色',
                                        },
                                        {
                                        id:'312',
                                        authname:'删除角色',
                                        },
                                        {
                                        id:'313',
                                        authname:'取消角色授权',
                                        },
                                        {
                                        id:'314',
                                        authname:'获取角色列表',
                                        },
                                        {
                                        id:'315',
                                        authname:'获取角色详情',
                                        },
                                        {
                                        id:'316',
                                        authname:'更新角色信息',
                                        },
                                        {
                                        id:'317',
                                        authname:'更新角色权限',
                                        },
                                        
                                    ]
                                },
                                {
                                    id:'32',
                                    authname:'权限列表',
                                    children:[
                                        {
                                        id:'321',
                                        authname:'查看权限',
                                        }
                                    ]

                                }
                            ]
                        },
                        {
                            id:'4',
                            authname:'用户管理',
                            children:[
                                {
                                    id:'41',
                                    authname:'用户列表',
                                    children:[
                                        {
                                        id:'411',
                                        authname:'添加用户',
                                        },
                                        {
                                        id:'412',
                                        authname:'删除用户',
                                        },
                                        {
                                        id:'413',
                                        authname:'更新用户',
                                        },
                                        {
                                        id:'414',
                                        authname:'获取用户详情',
                                        },
                                        {
                                        id:'415',
                                        authname:'分配用户角色',
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            id:'5',
                            authname:'数据统计',
                            children:[
                                {
                                    id:'51',
                                    authname:'数据报表',
                                    children:[
                                        {
                                            id:'511',
                                            authname:'查看数据'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },

            ],
            dialogVisible:false,
            treeprops:{
                label:'authname',
                children:'children'
            },
            defkey:[0]
        }
    },
    methods:{
        // 递归获取底层的id
        getLeafKeys(node, arr) {
            if(!node.children){
                return arr.push(node.id)
            }
            node.children.forEach(item => this.getLeafKeys(item, arr))
        }
    }
}
</script>

<style lang="less" scoped>
    .el-tag{
        margin: 7px;
    }
    .bdtop{
        border-top: 1px solid #eee;
    }
    .bdottom{
        border-bottom: 1px solid #eee;
    }
    .vcenter{
        display: flex;
        align-items: center;
    }
</style>