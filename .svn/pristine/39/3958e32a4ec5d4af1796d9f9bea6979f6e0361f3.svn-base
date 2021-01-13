<template>
  <div class="permission" id="permission" v-cloak>
    <div class="left-container">
      <div class="choose-role">
        <el-select
          v-model="role"
          class="sel-sch"
          filterable
          remote
          clearable
          placeholder="请输入关键词"
          :remote-method="remoteMethod"
          :loading="loading"
          v-on:change="pickRole"
        >
          <el-option
            v-for="item in roles"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-button
          type="primary"
          size="small"
          style="margin-left: 10px"
          v-on:click="openRolePicker"
          >角色</el-button
        >
      </div>
      <el-scrollbar wrap-class="h-permission-scroll">
        <el-tree :data="moduleList" show-checkbox ref="modules" node-key="id">
        </el-tree>
      </el-scrollbar>
    </div>
    <div class="right-container">
      <div class="modules">
        <el-scrollbar wrap-class="h-permission-scroll" >
          <div class="module" v-for="(item, index) in modules" :key="index">
            <div class="module-name">
              <el-checkbox v-model="item.checked">{{ item.name }}</el-checkbox>
              <template v-if="item.collapse">
                <i
                  class="el-icon-arrow-down collapse-handler"
                  v-on:click="item.collapse = !item.collapse"
                ></i>
              </template>
              <template v-else>
                <i
                  class="el-icon-arrow-up collapse-handler"
                  v-on:click="item.collapse = !item.collapse"
                ></i>
              </template>
            </div>
            <transition name="slide-fade">
              <div class="pages" v-if="!item.collapse">
                <el-scrollbar class="v-scroll" :vertical="true">
                  <div class="page" v-for="(page, k) in item.pages" :key="k">
                    <div class="page-name">
                      <el-checkbox v-model="page.checked">{{
                        page.name
                      }}</el-checkbox>
                      <i
                        class="el-icon-plus add-attr"
                        v-on:click="dg_addAttr = true"
                      ></i>
                    </div>
                    <div class="attrs">
                      <el-scrollbar wrap-class="h-permission-scroll">
                        <div class="attr" v-for="(attr, i) in page.attrs" :key="i">
                          <el-checkbox
                            v-model="attr.checked"
                            class="attr-ckd"
                            >{{ attr.name }}</el-checkbox
                          >
                          <el-popover
                            placement="bottom"
                            trigger="hover"
                            width="80"
                          >
                            <div class="popover-link">
                              <div>
                                <a
                                  href="javascrtipt:void(0);"
                                  v-on:click="openEditAttrDialog"
                                  >修改</a
                                >
                              </div>
                              <div>
                                <a
                                  href="javascrtipt:void(0);"
                                  v-on:click="deleteAttr"
                                  >删除</a
                                >
                              </div>
                            </div>
                            <span slot="reference" class="more">
                              <i class="el-icon-more"></i>
                            </span>
                          </el-popover>
                        </div>
                      </el-scrollbar>
                    </div>
                  </div>
                </el-scrollbar>
              </div>
            </transition>
          </div>
        </el-scrollbar>
      </div>
      <el-dialog title="选择角色" :visible.sync="dg_role">
        <div>
          <div class="search-form">
            <el-form
              :inline="true"
              :model="formInline"
              class="demo-form-inline"
              size="small"
            >
              <el-form-item label="角色编号">
                <el-input
                  v-model="formInline.code"
                  placeholder="请输入"
                ></el-input>
              </el-form-item>
              <el-form-item label="角色名称">
                <el-input
                  v-model="formInline.name"
                  placeholder="请输入"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" v-on:click="searchRole"
                  >搜索</el-button
                >
                <el-button type="primary" v-on:click="searchRole"
                  >确认选择</el-button
                >
              </el-form-item>
            </el-form>
          </div>
          <div class="role-table">
            <el-table
              ref="roleTable"
              :data="roleData"
              tooltip-effect="dark"
              size="small"
              style="width: 100%"
            >
              <div slot="empty" style="padding: 120px 0">暂无数据</div>
              <el-table-column type="selection" width="55"> </el-table-column>
              <el-table-column prop="rolecode" width="150" label="角色编码">
              </el-table-column>
              <el-table-column prop="rolename" width="200" label="角色名称">
              </el-table-column>
              <el-table-column
                prop="roledesc"
                label="角色描述"
                show-overflow-tooltip
              >
              </el-table-column>
            </el-table>
            <div class="pagination">
              <el-pagination
                background
                hide-on-single-page
                layout="prev, pager, next"
                :total="1000"
              >
              </el-pagination>
            </div>
          </div>
        </div>
      </el-dialog>
      <el-dialog title="添加字段" width="440px" :visible.sync="dg_addAttr">
        <el-input
          v-model="addAttrCode"
          Placeholder="请输入字段编码"
          style="margin-bottom: 20px"
        >
        </el-input>
        <el-input v-model="addAttrName" Placeholder="请输入字段名称">
        </el-input>
        <span slot="footer" class="dialog-footer">
          <el-button v-on:click="dg_addAttr = false" size="small"
            >取 消</el-button
          >
          <el-button type="primary" v-on:click="addAttrFunc" size="small"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      <el-dialog title="修改字段" width="440px" :visible.sync="dg_editAttr">
        <el-input v-model="editAttrName" Placeholder="请输入字段名称">
        </el-input>
        <span slot="footer" class="dialog-footer">
          <el-button v-on:click="dg_editAttr = false" size="small"
            >取 消</el-button
          >
          <el-button type="primary" v-on:click="editAttrFunc" size="small"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      role: "", //下拉框-角色
      loading: false, //角色搜索-loading
      dg_addAttr: false, //新增属性框显示与否
      dg_editAttr: false, //编辑属性框显示与否
      dg_role: false, //角色选择框显示与否
      addAttrCode: "", //属性新增-编码字段
      addAttrName: "", //属性新增-名称字段
      editAttrName: "", //属性编辑-名称字段
      formInline: {
        //弹出框-角色搜索字段
        code: "",
        name: "",
      },
      roleData: [
        {
          roleid: 100,
          rolecode: "bagong2",
          rolename: "一般报工",
          roledesc: "一般报工",
          roledesc2: null,
          roledesc3: null,
          roledesc4: null,
        },
        {
          roleid: 98,
          rolecode: "baogong1",
          rolename: "机加工报工",
          roledesc: "机加工报工",
          roledesc2: null,
          roledesc3: null,
          roledesc4: null,
        },
        {
          roleid: 97,
          rolecode: "saoma",
          rolename: "扫码打印机",
          roledesc: "现场扫码打印流转卡",
          roledesc2: null,
          roledesc3: null,
          roledesc4: null,
        },
        {
          roleid: 95,
          rolecode: "5003",
          rolename: "能耗查看",
          roledesc: "查看能耗情况无录入权限",
          roledesc2: null,
          roledesc3: null,
          roledesc4: null,
        },
        {
          roleid: 94,
          rolecode: "5002",
          rolename: "能耗管理员",
          roledesc: "可以维护能耗点和录入数值",
          roledesc2: null,
          roledesc3: null,
          roledesc4: null,
        },
        {
          roleid: 93,
          rolecode: "5001",
          rolename: "能耗录入",
          roledesc: "可以录入能耗信息",
          roledesc2: null,
          roledesc3: null,
          roledesc4: null,
        },
        {
          roleid: 92,
          rolecode: "3108",
          rolename: "进料检验员",
          roledesc: "进料检验权限",
          roledesc2: null,
          roledesc3: null,
          roledesc4: null,
        },
        {
          roleid: 91,
          rolecode: "903",
          rolename: "焊接报表",
          roledesc: "焊接报表查看",
          roledesc2: null,
          roledesc3: null,
          roledesc4: null,
        },
        {
          roleid: 90,
          rolecode: "3106",
          rolename: "计划文员",
          roledesc: "",
          roledesc2: null,
          roledesc3: null,
          roledesc4: null,
        },
        {
          roleid: 89,
          rolecode: "3105",
          rolename: "金工检验员",
          roledesc: "现场检验员",
          roledesc2: null,
          roledesc3: null,
          roledesc4: null,
        },
      ], //角色表格数据
      moduleList: [
        //一级模块列表
        {
          id: 1,
          label: "订单与计划",
          children: [],
        },
        {
          id: 2,
          label: "供应链管理",
          children: [],
        },
        {
          id: 3,
          label: "金工智造",
          children: [],
        },
        {
          id: 4,
          label: "焊接智造",
          children: [],
        },
        {
          id: 5,
          label: "喷涂装配",
          children: [],
        },
        {
          id: 6,
          label: "注塑小件",
          children: [],
        },
        {
          id: 7,
          label: "产品资料",
          children: [],
        },
        {
          id: 8,
          label: "模具设备",
          children: [],
        },
        {
          id: 9,
          label: "研发管理",
          children: [],
        },
        {
          id: 10,
          label: "系统管理",
          children: [],
        },
      ],
      modules: [
        {
          name: "订单与主计划",
          checked: false,
          collapse: false,
          pages: [
            {
              name: "原材料采购",
              checked: false,
              attrs: [
                {
                  name: "查询",
                  checked: false,
                },
                {
                  name: "修改",
                  checked: false,
                },
                {
                  name: "删除",
                  checked: false,
                },
                {
                  name: "查询",
                  checked: false,
                },
                {
                  name: "修改",
                  checked: false,
                },
                {
                  name: "删除",
                  checked: false,
                },
                {
                  name: "查询",
                  checked: false,
                },
                {
                  name: "修改",
                  checked: false,
                },
                {
                  name: "删除",
                  checked: false,
                },
                {
                  name: "查询",
                  checked: false,
                },
                {
                  name: "修改",
                  checked: false,
                },
                {
                  name: "删除",
                  checked: false,
                },
                {
                  name: "查询",
                  checked: false,
                },
                {
                  name: "修改",
                  checked: false,
                },
                {
                  name: "删除",
                  checked: false,
                },
              ],
            },
            {
              name: "原材料采购",
              checked: false,
              attrs: [
                {
                  name: "查询",
                  checked: false,
                },
                {
                  name: "修改",
                  checked: false,
                },
                {
                  name: "删除",
                  checked: false,
                },
              ],
            },
            {
              name: "原材料采购",
              checked: false,
              attrs: [
                {
                  name: "查询",
                  checked: false,
                },
                {
                  name: "修改",
                  checked: false,
                },
                {
                  name: "删除",
                  checked: false,
                },
              ],
            },
              {
              name: "原材料采购",
              checked: false,
              attrs: [
                {
                  name: "查询",
                  checked: false,
                },
                {
                  name: "修改",
                  checked: false,
                },
                {
                  name: "删除",
                  checked: false,
                },
              ],
            },
              {
              name: "原材料采购",
              checked: false,
              attrs: [
                {
                  name: "查询",
                  checked: false,
                },
                {
                  name: "修改",
                  checked: false,
                },
                {
                  name: "删除",
                  checked: false,
                },
              ],
            },
              {
              name: "原材料采购",
              checked: false,
              attrs: [
                {
                  name: "查询",
                  checked: false,
                },
                {
                  name: "修改",
                  checked: false,
                },
                {
                  name: "删除",
                  checked: false,
                },
              ],
            },
              {
              name: "原材料采购",
              checked: false,
              attrs: [
                {
                  name: "查询",
                  checked: false,
                },
                {
                  name: "修改",
                  checked: false,
                },
                {
                  name: "删除",
                  checked: false,
                },
              ],
            },
              {
              name: "原材料采购",
              checked: false,
              attrs: [
                {
                  name: "查询",
                  checked: false,
                },
                {
                  name: "修改",
                  checked: false,
                },
                {
                  name: "删除",
                  checked: false,
                },
              ],
            },
              {
              name: "原材料采购",
              checked: false,
              attrs: [
                {
                  name: "查询",
                  checked: false,
                },
                {
                  name: "修改",
                  checked: false,
                },
                {
                  name: "删除",
                  checked: false,
                },
              ],
            },
              {
              name: "原材料采购",
              checked: false,
              attrs: [
                {
                  name: "查询",
                  checked: false,
                },
                {
                  name: "修改",
                  checked: false,
                },
                {
                  name: "删除",
                  checked: false,
                },
              ],
            },
              {
              name: "原材料采购",
              checked: false,
              attrs: [
                {
                  name: "查询",
                  checked: false,
                },
                {
                  name: "修改",
                  checked: false,
                },
                {
                  name: "删除",
                  checked: false,
                },
              ],
            },
          ],
        },
        {
          name: "供应链管理",
          checked: false,
          collapse: false,
          pages: [
            {
              name: "原材料采购",
              checked: false,
              attrs: [
                {
                  name: "查询",
                  checked: false,
                },
                {
                  name: "修改",
                  checked: false,
                },
                {
                  name: "删除",
                  checked: false,
                },
              ],
            },
            {
              name: "原材料采购",
              checked: false,
              attrs: [
                {
                  name: "查询",
                  checked: false,
                },
                {
                  name: "修改",
                  checked: false,
                },
                {
                  name: "删除",
                  checked: false,
                },
              ],
            },
            {
              name: "原材料采购",
              checked: false,
              attrs: [
                {
                  name: "查询",
                  checked: false,
                },
                {
                  name: "修改",
                  checked: false,
                },
                {
                  name: "删除",
                  checked: false,
                },
              ],
            },
          ],
        },
        {
          name: "金工智造",
          checked: false,
          collapse: false,
          pages: [
            {
              name: "原材料采购",
              checked: false,
              attrs: [
                {
                  name: "查询",
                  checked: false,
                },
                {
                  name: "修改",
                  checked: false,
                },
                {
                  name: "删除",
                  checked: false,
                },
              ],
            },
            {
              name: "原材料采购",
              checked: false,
              attrs: [
                {
                  name: "查询",
                  checked: false,
                },
                {
                  name: "修改",
                  checked: false,
                },
                {
                  name: "删除",
                  checked: false,
                },
              ],
            },
            {
              name: "原材料采购",
              checked: false,
              attrs: [
                {
                  name: "查询",
                  checked: false,
                },
                {
                  name: "修改",
                  checked: false,
                },
                {
                  name: "删除",
                  checked: false,
                },
              ],
            },
          ],
        },
      ], //二级模块列表
      roles: [], //下拉选择-角色列表
    };
  },
  methods: {
    remoteMethod(query) {
      //下拉选择-角色搜索
      let list = [
        {
          label: "一般工人",
          value: "一般工人",
        },
        {
          label: "机加工报工",
          value: "机加工报工",
        },
        {
          label: "能耗管理员",
          value: "能耗管理员",
        },
        {
          label: "计划文员",
          value: "计划文员",
        },
        {
          label: "金工检验员",
          value: "金工检验员",
        },
      ];
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.roles = list.filter((item) => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 400);
      } else {
        this.roles = [];
      }
    },
    addAttrFunc: function () {
      //新增属性保存
      this.dg_addAttr = false;
    },
    openEditAttrDialog: function () {
      //打开属性编辑框
      this.dg_editAttr = true;
    },
    editAttrFunc: function () {
      //编辑属性保存
    },
    deleteAttr: function () {
      //删除属性
      this.$confirm("此操作将永久删除该字段, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    pickRole: function (role) {
      //选择角色
      console.log("----role----");
      console.log(role);
    },
    openRolePicker: function () {
      //打开角色选择弹出框
      console.log(this.$refs.modules.getCheckedKeys());
      this.dg_role = true;
    },
    dg_pickRole: function () {
      //弹出框-角色选择
    },
    searchRole: function () {
      //弹出框-角色搜索
      console.log(this.$refs.roleTable.selection);
    },
  },
};
</script>
<style lang="scss">
#permission .el-scrollbar {
  height: 100%;
}
#permission .h-permission-scroll {
  overflow-x: hidden;
  height: 100%;
}
.v-scroll {
  width: 100%;
  height: 100%;
}
.v-scroll > .el-scrollbar__wrap {
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  margin:0 !important;
}
.v-scroll > .el-scrollbar__wrap > .el-scrollbar__view {
  font-size: 0;
}
.el-dialog__body {
  padding: 20px;
}
.permission .el-tree-node__content {
  height: 32px;
}
.permission .is-current > .el-tree-node__content,
.permission .is-current > .el-tree-node__content:hover {
  background-color: #0097d7;
  color: #fff;
}
.permission .el-tree-node__content:hover {
  background-color: #e6f5fb;
}
</style>
<style lang="scss" scoped>
.permission[v-cloak] {
  display: none;
}

.permission {
  background-color: #fff;
  display: flex;
  height: 100%;
}

.left-container {
  width: 300px;
  border-right: 1px solid #cccccc;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}

.clearfix {
  zoom: 1;
}
.choose-role {
    display:flex;
    margin-bottom:10px;
}
.sel-sch {
    display:flex;
}

.more {
  padding: 0 5px;
}

.el-icon-more {
  transform: rotate(90deg);
  color: #fff;
  font-size: 14px;
  line-height: 38px;
}


.popover-link a {
  display: block;
  height: 30px;
  line-height: 30px;
  color: #666;
  text-decoration: none;
  padding-left: 20px;
}

.popover-link a:hover {
  color: #0097d7;
  background: #f5f5f5;
}
.right-container {
  flex: 1;
  min-width: 0;
}
.modules {
   height:100%;
    overflow: hidden;
}
.module:first-child {
    padding-top:20px;
}
.module {
    margin-bottom: 20px;
    padding: 0 20px;
}
.btns {
  padding-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ccc;
}
.pages {
  height: 430px;
  margin-top: 10px;
  border: 1px solid #d7d7d7;
  position: relative;
}
.pages:before {
  width: 100%;
  height: 38px;
  background-color: #f5f5f5;
  position: absolute;
  content: "";
  left: 0;
  top: 0;
}
.page {
  height: 428px;
  width: 170px;
  border-right: 1px solid #d7d7d7;
  z-index: 1;
  position: relative;
  display: inline-block;
  overflow: hidden;
}
.attr:hover{
  background-color: #e6f5fb;
}
.attr:hover .el-icon-more {
  color: #0097d7;
}

.attrs {
  height: calc(100% - 38px);
}
.page-name,
.attr {
  height: 38px;
  line-height: 38px;
  padding: 0 10px;
  position: relative;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  height: 0;
}
.collapse-handler {
  cursor: pointer;
}
.add-attr {
  position: absolute;
  top: 50%;
  right: 10px;
  margin-top: -7px;
  color: #606266;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
}
.attr {
  display: flex;
  cursor: pointer;
}
.attr-ckd {
  flex: 1;
}

.search-form {
  border-bottom: 1px solid #e8e8e8;
}
.pagination {
  text-align: right;
  margin-top: 10px;
}
</style>