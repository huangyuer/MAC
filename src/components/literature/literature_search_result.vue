<template>
  <div class="engineer_wrapper">
     
    <engineer-header-bg></engineer-header-bg>
    <engineer-header-bar></engineer-header-bar>

    <div class="engineer_list_wrapper">

       
      <!--工程师-->
      <div class="engineer_list">
        <router-link :to="'/engineer/list'">
          <div class="engineer_list_left">
            <div class="engineer_list_left_img">
              <img src="../../assets/images/engineer_avatar.png"/>
            </div>
            <h4>工程师</h4>
            <p>收录了从古代到改革开放以来的著名工程师，包括等等</p>
          </div>
        </router-link>
        <div class="engineer_list_right">
           <ul>
            <li v-for="literature in literatures">
              <router-link :to="'/literature/info/' + literature._id">
                <literature-item :literature="literature._source"></literature-item>
              </router-link>
            </li>
          </ul> 
           <div style="clear:both;"></div>
           <div style="margin:20px;" class="paginator">
            <el-pagination
              background
              @current-change="handleCurrentChange"
              layout="prev, pager, next"
              :total="literaturesTotal" :current-page="currentPage" :page-size="pageSize">
            </el-pagination>
          </div>
        </div>
        
          
      </div>
      <div class="clear"></div>  
    </div>
  </div>
</template>

<script>
  import engineerHeaderBg from '../engineer/engineer_header_bg.vue'
  import engineerHeaderBar from '../engineer/engineer_header_bar.vue'
  import literatureItem from './literature_item.vue'
  export default {
    data() {
      return {
        
      }
    },
    components: {
      engineerHeaderBg,
      engineerHeaderBar,
      literatureItem
    },
    mounted(){
      this.getData();
    },
    computed: {  
      literatures () {
        return  this.$store.getters.literatureSearchResults;
      }, 
      searchContent: function () {
        return this.$store.state.searchComponent.searchContent
      },
      literaturesTotal(){ 
        return this.$store.getters.totalLiteratureSearchResults;
      },
      pageSize(){
        let pageSize = this.$route.query.limit || 20;  
        return parseInt(pageSize);
      },
      currentPage(){
        let currentPage = this.$route.query.page || 1;  
        return parseInt(currentPage);
      }
    },
     
    watch: { 
        
    },
    methods: { 
      getData: function(){   
         
      },
      handleCurrentChange(val) {  
         let p = {
          searchContent: this.searchContent,
          category: '0',
          keywords: [],
          rows: 16,
          page: val,
        }    
        this.$store.dispatch('searchProject', p)
        // this.$store.dispatch('searchProject', p)
        this.$router.push('/project/search/result')
      },
    }
  }
</script>
