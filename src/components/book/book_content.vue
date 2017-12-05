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
              <template slot-scope="scope"><span v-for="space in scope.row.level" class="ms-tree-space">&nbsp;&nbsp;&nbsp;&nbsp;</span><el-button  v-if="scope.row.isLeaf===true" type="text" icon="el-icon-document"></el-button><el-button @click="toggle(scope.row,index)"  v-else-if="scope.row.expanded===true"  type="text" icon="el-icon-caret-bottom"></el-button><el-button @click="toggle(scope.row,index)" v-else type="text" icon="el-icon-caret-right"></el-button><span @click="openChapter(scope.row)">{{scope.row.name}}</span></template>
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
                <p v-html="bookChapterDetail.contentRaw"></p>
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
      src(){  
        let src = this.$route.query.src || '';
        return decodeURI(src);
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
      bookChapterDetail(){
        return this.$store.getters.bookChapterDetail;
      },
      bookChapterDetailReady(){  
        return this.$store.getters.bookChapterDetailReady;
      },
      coverUrlPrefix(){
        return this.$store.getters.coverUrlPrefix;
      }
    },
    watch:{
      '$route': 'init'
    },
    methods: {
      init: function(){
        this.$store.dispatch('listBookCatalogs', {'bookId': this.bookId, 'limit': 1000, 'page':1 });
        this.$store.dispatch('getBookChapterBySrc', {'bookId': this.bookId, 'src': this.src});
        // this.$store.dispatch('getBookChapterDetail', {'bookChapterId': '59e85e59f18d06f0ddc17900' });
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
      openChapter: function(chapter){ 
        this.$router.push('/book/content/' + this.bookId + '/chapter?src=' + chapter.src);
      }
    }
  }
</script>

<style>
</style>
