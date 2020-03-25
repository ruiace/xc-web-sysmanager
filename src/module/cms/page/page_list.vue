<template>
  <div>

    <el-button type="primary" icon="el-icon-search" size="small" v-on:click="query">查询</el-button>
    <hr>
    <!--    表格  -->
    <el-table :data="list" stripe style="width: 100%">
      <el-table-column type="index" width="60"> </el-table-column>
      <el-table-column prop="pageName" label="页面名称" width="120"></el-table-column>
      <el-table-column prop="pageAliase" label="别名" width="120"> </el-table-column>
      <el-table-column prop="pageType" label="页面类型" width="150"> </el-table-column>
      <el-table-column prop="pageWebPath" label="访问路径" width="250"> </el-table-column>
      <el-table-column prop="pagePhysicalPath" label="物理路径" width="250"> </el-table-column>
      <el-table-column prop="pageCreateTime" label="创建时间" width="180" > </el-table-column>
    </el-table>
    <!--    分页  -->
    <el-pagination background layout="prev, pager, next" :total="total"
                   :page-size="params.size" :current-page="params.page"
                   @current-change="pageChange"
                   style="float:right">
    </el-pagination>
  </div>
</template>

<script>
  /*编写页面静态部分，即model及vm部分。*/

  import * as cmsApi from '../api/cms'

  export default {

    data() {
      return {
        total: 20,
        params:{
          size: 10,
          page:2
        },
        list: [
        ]
      }
    },
    methods: {
      query: function(){
        alert("查询");
        cmsApi.page_list(this.params.page,this.params.size).then((result) => {
          this.list = result.queryResult.list;
          this.total = result.queryResult.total;
        })
      },
      pageChange: function(){
        alert("PAGE CHANGE");
        this.query();
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    }
  }
</script>

<style>
  /*编写页面样式，不是必须*/
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
