<template>
  <div>
    <div
      v-loading="g_loading"
      style="
        margin-top: 50px;
        width: calc(100% - 10px);
        height: calc(100vh - 140px);
      "
    >
      <SeeksRelationGraph
        ref="seeksRelationGraph"
        :options="graphOptions"
        :on-node-expand="onNodeExpand"
      />
    </div>
    <el-button type="success" class="c-show-code-button"
      ><el-link
        href="https://github.com/seeksdream/relation-graph/blob/master/doc/demo/Demo4SceneOrg.vue"
        target="_blank"
        style="color: #ffffff"
        >查看代码</el-link
      ></el-button
    >
  </div>
</template>

<script>
import SeeksRelationGraph from "relation-graph";
export default {
  name: "SeeksRelationGraphDemo",
  components: { SeeksRelationGraph },
  data() {
    return {
      g_loading: true,
      demoname: "---",
      graphOptions: {
        backgrounImage: "http://ai-mark.cn/images/ai-mark-desc.png",
        backgrounImageNoRepeat: true,
        layouts: [
          {
            label: "中心",
            layoutName: "tree",
            layoutClassName: "seeks-layout-tree",
            defaultJunctionPoint: "border",
            defaultNodeShape: 0,
            defaultLineShape: 1,
            centerOffset_x: -300,
            centerOffset_y: 0,
            min_per_width: "200",
            min_per_height: "400",
          },
        ],
        defaultExpandHolderPosition: "bottom",
        defaultLineShape: 4,
        defaultJunctionPoint: "tb",
        defaultNodeShape: 1,
        defaultNodeWidth: "150",
        defaultNodeHeight: "100",
        defaultNodeBorderWidth: 0,
      },
    };
  },
  created() {},
  mounted() {
    this.demoname = this.$route.params.demoname;
    this.setGraphData();
  },
  methods: {
    setGraphData() {
      var __graph_json_data = {
        rootId: "N1",
        nodes: [
          { id: "N1", text: "深圳市腾讯计算机系统有限公司", color: "#2E4E8F" },
          //   { id: "N2", text: "张志东", color: "#4ea2f0" },
          //   { id: "N3", text: "陈一丹", color: "#4ea2f0" },
          //   { id: "N4", text: "许晨晔", color: "#4ea2f0" },
          //   { id: "N5", text: "马化腾", color: "#4ea2f0" },
          { id: "N6", text: "董事张三", color: "#4ea2f0" },
          { id: "N7", text: "董事李四", color: "#4ea2f0" },
          { id: "N8", text: "董事王五", color: "#4ea2f0" },
          { id: "N9", text: "副董事长", color: "#4ea2f0" },
          { id: "N10", text: "副董事长", color: "#4ea2f0" },
          { id: "N11", text: "副董事长", color: "#4ea2f0" },
          { id: "N12", text: "副董事长", color: "#4ea2f0" },
        ],
        links: [
          { from: "N2", to: "N1", text: "" },
          { from: "N3", to: "N1", text: "" },
          { from: "N4", to: "N1", text: "" },
          { from: "N5", to: "N1", text: "" },
          { from: "N1", to: "N6", text: "" },
          { from: "N1", to: "N7", text: "" },
          { from: "N1", to: "N8", text: "" },
          { from: "N6", to: "N9", text: "" },
          { from: "N6", to: "N10", text: "" },
          { from: "N6", to: "N11", text: "" },
          { from: "N6", to: "N12", text: "" },
        ],
      };
      console.log(JSON.stringify(__graph_json_data));
      //   __graph_json_data.nodes.forEach((thisNode) => {
      //     if (thisNode.text === "深圳市腾讯计算机系统有限公司") {
      //       thisNode.width = 300;
      //       thisNode.height = 100;
      //       thisNode.offset_x = -80;
      //     }
      //     if (
      //       thisNode.text === "张志东" ||
      //       thisNode.text === "陈一丹" ||
      //       thisNode.text === "许晨晔" ||
      //       thisNode.text === "马化腾"
      //     ) {
      //       thisNode.width = 100;
      //       thisNode.height = 80;
      //       thisNode.offset_y = 80;
      //     }
      //     // 为节点《这个节点原本是没有子节点的》设置属性expandHolderPosition，使其在没有子节点的情况下也能显示【展开/收缩】按钮，当点击展开时动态加载子节点数据
      //     if (thisNode.text === "这个节点原本是没有子节点的") {
      //       thisNode.data = { asyncChild: true, loaded: false }; // 这是一个自定义属性，用来在后续判断如果点击了这个节点，则动态获取数据
      //       thisNode.expandHolderPosition = "bottom";
      //       thisNode.expanded = false;
      //     }
      //   });
      setTimeout(
        function () {
          this.g_loading = false;
          this.$refs.seeksRelationGraph.setJsonData(
            __graph_json_data,
            (seeksRGGraph) => {
              // 这些写上当图谱初始化完成后需要执行的代码
            }
          );
        }.bind(this),
        1000
      );
    },
    // onNodeExpand(node, e) {
    //   //模拟动态加载数据
    //   if (
    //     node.data &&
    //     node.data.asyncChild === true &&
    //     node.data.loaded === false
    //   ) {
    //     this.g_loading = true;
    //     node.data.loaded = true;
    //     setTimeout(
    //       function () {
    //         this.g_loading = false;
    //         var _new_json_data = {
    //           nodes: [
    //             { id: node.id + "-child-1", text: node.id + "-的子节点1" },
    //             { id: node.id + "-child-2", text: node.id + "-的子节点2" },
    //             { id: node.id + "-child-3", text: node.id + "-的子节点3" },
    //           ],
    //           links: [
    //             { from: node.id, to: node.id + "-child-1", text: "动态子节点" },
    //             { from: node.id, to: node.id + "-child-2", text: "动态子节点" },
    //             { from: node.id, to: node.id + "-child-3", text: "动态子节点" },
    //           ],
    //         };
    //         this.$refs.seeksRelationGraph.appendJsonData(
    //           _new_json_data,
    //           (seeksRGGraph) => {
    //             // 这些写上当图谱初始化完成后需要执行的代码
    //           }
    //         );
    //       }.bind(this),
    //       1000
    //     );
    //     return;
    //   }
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>