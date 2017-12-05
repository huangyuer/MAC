<template>
  <div class="bg">
    <search-component></search-component> 
    <div class="list_main">
      <div class="main_left">
        <div class="list_left list_left_bg"> 
          <el-table
            :data="catalogs"
            style="width: 100%"
            :row-style="showRow"> 
            <el-table-column
              prop="name"
              label="本书目录">
              <template slot-scope="scope"><span v-for="space in scope.row.level" class="ms-tree-space">&nbsp;&nbsp;&nbsp;&nbsp;</span><el-button  v-if="scope.row.isLeaf===true" type="text" icon="el-icon-document"></el-button><el-button @click="toggle(scope.row,index)"  v-else-if="scope.row.expanded===true"  type="text" icon="el-icon-caret-bottom"></el-button><el-button @click="toggle(scope.row,index)" v-else type="text" icon="el-icon-caret-right"></el-button><span>{{scope.row.name}}</span></template>
            </el-table-column>
           
          </el-table>
  
          <!--  <el-tree :data="treeCatalogs"
              node-key="target-tree"
              :props="defaultProps" 
              :default-expand-all="true"  
              @node-click="handleNodeClick"
              :highlight-current="true"
              :show-checkbox="false" 
              ref="catalogs_tree"> 
            </el-tree>  -->
        </div>
        <div class="list_cent">
          <div class="book_li">
            <p>{{bookDetail.name}}</p>
            <dl >
              <dd style="float: left">
                <div class="dl_img" style="width:200px;"><img :src="coverUrlPrefix + bookDetail.cover" alt="" style="width:200px;">
                </div>
              </dd>
              <dd style="float: left">
                <p><span>英文书名：{{bookDetail.enName}}</span></p>
                <p><span>作者：</span><a href="">{{bookDetail.chiefEditor}}</a></p>
                <p><span>出版社：{{bookDetail.publisher}}</span></p>  
                <p><span>出版日期：</span>{{bookDetail.publishedAt}}</p>
                <p><span>印张数：{{bookDetail.sheets}}</span></p>
                <p><span>定价：</span>{{bookDetail.price}}</p> 
              </dd>
            </dl>
          </div>
          <div class="clear"></div>
          <div class="book_bt"><span>内容介绍</span></div>
          <div class="book_info">
            <p v-if="bookDetail.summary">{{bookDetail.summary}}</p>
           
            <p v-else>无</p>
            
          </div>
          <div class="book_bt"><span>作者介绍</span></div>
          <div class="book_info">
            <p v-if="bookDetail.authorInfo"> {{bookDetail.authorInfo}}</p>  
            <p v-else>无</p>
          </div>
        </div>

      </div>
      <div class="list_right">
        <a href=""><img src="../../assets/images/img1.jpg" alt=""></a>
        <a href=""><img src="../../assets/images/img1.jpg" alt=""></a>
      </div>
    </div>
    <div class="clear"></div>
   
  </div>
</template>

<script>
  import searchComponent from '../public/searchComponent.vue'
  import {DataTree} from '../../utils/data_tree'

  export default {
    name: 'book_info',
    data () {
      return {
        defaultProps: {
          children: 'children',
          label: 'name'
        },
      }
    },
    components: {
      searchComponent,
    },
    mounted:function(){
       this.init();

    }, 
    computed:{ 
      bookId(){  
        return this.$route.params.bookId || '0';
      },
      currentCatalog(){
        return this.$store.getters.currentCatalog;
      },
      treeCatalogs(){
        let catalogs = [];
        let oriCatalogs = this.$store.getters.bookCatalogs;
        if(oriCatalogs && oriCatalogs.length > 0){
          catalogs = DataTree.build(oriCatalogs); 
        } 
        return catalogs;
      },
      catalogs(){
        let catalogs = []; 
        catalogs  = this.treeToArray(this.treeCatalogs);
        return catalogs; 
      }, 
      bookDetail(){
        return this.$store.getters.bookDetail;
      },
      coverUrlPrefix(){
        return this.$store.getters.coverUrlPrefix;
      }
    },
    methods: {
      init: function(){
        this.$store.dispatch('listBookCatalogs', {'bookId': this.bookId, 'limit': 1000, 'page':1 });
        this.$store.dispatch('getBookDetail', {'bookId': this.bookId});
      },
      showRow: function (row, index) {
        let show = row['row'].display ? true : false; 
        return show ? '' : 'display:none;'
      },
      treeToArray: function(oriCatalogs){
        let a = new Array(); 
        for(let catalog of oriCatalogs){
          this.traverse(a, catalog); 
        } 
        return a;
      }, 
      // 遍历节点，并将节点压入数组
      traverse: function(a, node){
        let newNode = {}; 
        for(let f in node){
          newNode[f] = node[f];
        }
        var children = newNode.children; 
        a.push(newNode);
        if(children && children.length > 0){ 
          for(let child of children){
            this.traverse(a, child);
          }
        }
      },
      toggle: function(row, index){
        row.expanded = ! row.expanded;
        let parentId = row._id;
        let a = new Array();
        this.getAllChildren(a, parentId);
        for(let catalog of this.catalogs){
          if(a.indexOf(catalog._id) >= 0){ 
            catalog.expanded = row.expanded;
            catalog.display = row.expanded;
          }
        }
      }, 
      getAllChildren(a, parentId){
        for(let catalog of this.catalogs){
          if(catalog.parentId === parentId){
            a.push(catalog._id);
            this.getAllChildren(a, catalog._id);
          }
        }
      },
      handleNodeClick(data, node) {  
        
      },
    }
  }
</script>

<style>
</style>
