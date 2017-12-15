<template>
  <div class="engineer_wrapper">

    <engineer-header-bg></engineer-header-bg>
    <engineer-header-bar></engineer-header-bar>

    <div class="engineer_list_wrapper">

      <!--工程-->
      <div class="engineer_list">
        <router-link :to="'/project/list'">
        <div class="engineer_list_left">
          <div class="engineer_list_left_img">
            <img src="../../assets/images/project_avatar.png"/>
          </div>
          <h4>工程项目</h4>
          <p>收录了从古代到改革开放依赖的著名工程师，包括等等</p>
        </div>
      </router-link>
        <div class="engineer_list_right">
          <div>
            <ul>
              <li v-for="project in projects">
                <router-link :to="'/project/info/' + project._id">
                  <project-item :project="project"></project-item>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="clear"></div> 
          <div style="margin:20px;" class="paginator">
            <el-pagination
              background
              @current-change="handleCurrentChange"
              layout="prev, pager, next"
              :total="projectsTotal" :current-page="currentPage" :page-size="pageSize">
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
  import projectItem from './project_item.vue'
  export default {
    components: {
      engineerHeaderBg,
      engineerHeaderBar,
      projectItem
    },
    data() {
      return {
         
      }
    },
    mounted(){ 
      this.getLatestWorks();
    },
    computed:{
      projects(){
        return this.$store.getters.works;
      },
      projectsTotal(){
        return this.$store.getters.worksTotal;
      },
      currentCategory(){
        let category = this.$route.query.category || '';  
        return category;
      },
      currentEra(){
        let era = this.$route.query.era || '';  
        return era;
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
       '$route': 'getLatestWorks'
    },
    methods: { 
      getLatestWorks: function(category,limit,page){
        this.$store.dispatch('getLatestWorks', {'category': this.currentCategory,'era': this.currentEra, 'limit': 20, 'page': 1}); 
      },  
      handleCurrentChange(val) { 
        this.$store.dispatch('getLatestWorks', {'category': this.currentCategory,'era': this.currentEra,  'limit': this.pageSize, 'page': val}); 
         
      },
    }
  }

</script>
