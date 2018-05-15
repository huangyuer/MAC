<template>
<div>   
    <el-table
    :data="entries"
    style="width: 100%">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column  
      label="头像"
      width="180">
        <template slot-scope="scope">
        <img v-show="scope.row.avatar" width="64" height="64" :src="scope.row.avatar+'?x-oss-process=image/resize,w_100'" /> 
        <img v-show="!scope.row.avatar" width="64" height="64" src="/assets/img/default-entry.png" /> 
        <img v-show="!scope.row.avatar" width="64" src="/asssets/images/default.jpg">
     </template>
    </el-table-column>
    <el-table-column 
      prop="name"
      label="姓名">
      <template slot-scope="scope">
        <router-link :to="'/entry/detail/' + scope.row._id">{{scope.row.name}}</router-link>
      </template>
    </el-table-column>
    <el-table-column
      prop="professions"
      label="专长"
      width="180">
      <template slot-scope="scope">
     <div v-for="profession in scope.row.professions">
        <router-link style="margin-right:10px;" :to="'/entries?profession='+profession"><el-tag type="success" close-transition>{{profession}}</el-tag></router-link>
      </div>
      </template> 
    </el-table-column> 
     <el-table-column
      prop="trades"
      label="行业"
      width="180">
      <template  slot-scope="scope">
        <div v-for="trade in scope.row.trades">
        <router-link style="margin-right:10px;" :to="'/entries?trade='+trade"><el-tag type="success" close-transition>{{trade}}</el-tag></router-link>
       </div>
      </template> 
    </el-table-column>
    <el-table-column
      prop="works"
      label="相关工程"
      width="100">
       <template slot-scope="scope">
        <a href="javascript:;" @click="editWorks(scope.$index, scope.row)"><i class="icon iconfont icon-edit"></i></a>
        <div v-for="work in scope.row.works">
        <router-link style="margin-right:10px;" :to="'/entries?work='+work"> {{work.title}}</router-link>
      </div>
      </template> 
    </el-table-column>
    <el-table-column
      :context="_self" 
      label="操作">
       <template slot-scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">
          编辑
        </el-button>  
        <el-button
          size="small"
          type="danger"
          @click="confirmDelete(scope.$index, scope.row)">
          删除
        </el-button>
        </template> 
    </el-table-column>
  </el-table> 
   
  </div>
</template> 
<style>
  .body-content{margin-top: 120px;}
</style>

<script> 
  export default{
    name: 'EntryList',
    props: ['entries', ],
    data(){
      return { 
        msg: '词条列表', 
        deleteConfirmVisible: false,  
      }
    },  
    computed: {
      entryDeleteStatus(){
        return this.$store.getters.entryDeleteStatus;
      },
      entryDeleteResult(){
        return this.$store.getters.entryDeleteResult;
      },
      
      sectionItemDetail(){
        return this.$store.getters.sectionItemDetail;
      }
    },
    components: {
        
    },
    watch: { 
      entryDeleteStatus: {
        handler: function (val, oldVal) { 
          if(val){ 
            this.$message({
              showClose: true,
              message: '词条删除成功',
              type: 'success'
            });  
          } 
        },
        deep: true
      }
    },
    methods: { 
      editWorks: function(index, row){  
        // this.$store.dispatch('getEntryDetail', {'entryId': row._id}); 
        this.$store.dispatch('getEntryWorks', {'entryId': row._id});   
        this.$store.dispatch('getLatestWorks', {'category': '', 'limit': 10000, 'page': 1}); 
        this.$store.commit('showEntryWorksRelationDialog');
      },
      handleEdit: function(index, row){
        this.$router.push('/entry/edit/' + row._id);
      },
      showDeleteConfirm: function(){
        this.deleteConfirmVisible = true;
      },
      handleDelete: function(index, row) {    
        this.deleteConfirmVisible = false;
        this.$store.dispatch('deleteEntry', row._id);
        this.entries.splice(index, 1);
      }, 
      cancelDelete:function(){ 
        console.log(this.deleteConfirmVisible);
        this.deleteConfirmVisible = false;
      },
      confirmDelete(index, row) {
        this.$confirm('此操作将永久删除该文档, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log(index);
          this.handleDelete(index, row);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      } 
    }
  }
</script>