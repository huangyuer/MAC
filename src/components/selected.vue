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
            <img src="../assets/images/engineer_avatar.png"/>
          </div>
          <h4>工程师</h4>
          <p>收录了从古代到改革开放以来的著名工程师，包括等等</p>
        </div>
        </router-link>
        <div class="engineer_list_right">
          <ul>
            <li v-for="engineer in engineers">
              <router-link :to="'/engineer/info/' + engineer._id">
                <engineer-item :engineer="engineer"></engineer-item>
              </router-link>
            </li>
          </ul>
          <div class="list_all">
            <router-link to="/engineer/list">
              <p class="list_all_btn"> > </p>
              <p>查看全部</p>
            </router-link>
          </div>
        </div>

      </div>
      <div class="clear"></div>

      <!--工程-->
      <div class="engineer_list">
        <router-link :to="'/project/list'">
        <div class="engineer_list_left">
          <div class="engineer_list_left_img">
            <img src="../assets/images/project_avatar.png"/>
          </div>
          <h4>工程项目</h4>
          <p>收录了从古代到改革开放依赖的著名工程师，包括等等</p>
        </div>
      </router-link>
        <div class="engineer_list_right">
          <ul>
            <li v-for="project in works">
              <router-link :to="'/project/info/' + project._id">
                <project-item :project="project"></project-item>
              </router-link>
            </li>
          </ul>
          <div class="list_all">
            <router-link to="/project/list">
              <p class="list_all_btn"> > </p>
              <p>查看全部</p>
            </router-link>
          </div>
        </div>
      </div>
      <div class="clear"></div>

      <!--工程文献-->
      <div class="engineer_list">
        <router-link :to="'/literature/list'">
        <div class="engineer_list_left">
          <div class="engineer_list_left_img">
            <img src="../assets/images/literature_avatar.png"/>
          </div>
          <h4>工程文献</h4>
          <p>收录了从古代到改革开放以来的著名工程师，包括等等</p>
        </div>
      </router-link>
        <div class="literature_list_right">
          <ul>
            <li v-for="literature in literatures">
              <router-link :to="'/literature/info/' + literature._id">
                <literature-item :literature="literature"></literature-item>
              </router-link>
            </li>
          </ul>
          <div class="list_all">
            <router-link to="/literature/list">
              <p class="list_all_btn"> > </p>
              <p>查看全部</p>
            </router-link>
          </div>
        </div>
      </div>
      <div class="clear"></div>

    </div>
  </div>
</template>

<script>
  import engineerHeaderBg from './engineer/engineer_header_bg.vue'
  import engineerHeaderBar from './engineer/engineer_header_bar.vue'
  import engineerItem from './engineer/engineer_item.vue'
  import projectItem from './project/project_item.vue'
  import literatureItem from './literature/literature_item.vue'
  export default {
    data() {
      return { 
      }
    },
    mounted(){
      this.getData();
    },
    computed: {
      engineers(){
        return this.$store.getters.engineers;
      },
      literatures(){
        return this.$store.getters.literatures;
      },
      currentCategory(){
        let category = this.$route.query.category || '';  
        return category;
      },
      currentEra(){
        let era = this.$route.query.era || '';  
        return era;
      },
      currentProfession(){
        let profession = this.$route.query.profession || '';  
        return profession;
      },
      works(){
        return this.$store.getters.works;
      }
    },
    components: {
      engineerHeaderBg,
      engineerHeaderBar,
      engineerItem,
      projectItem,
      literatureItem
    },
    watch: { 
       '$route': 'getData'
    },
    methods: { 
      getLatestWorks: function(){
        this.$store.dispatch('getLatestWorks', {'category': this.currentCategory, 'era': this.currentEra, 'limit': 6, 'page': 1}); 
      }, 
      getLatestEngineers: function(profession, era){
        this.$store.dispatch('getLatestEngineers', {profession: this.currentProfession, 'era': this.currentEra, 'limit': 6, 'page': 1}); 
      },
      getLatestLiteratures: function(){
        this.$store.dispatch('getLatestLiteratures', {'category': this.currentCategory, 'era': this.currentEra, 'limit': 6, 'page': 1}); 
      }, 
      getData: function(){
        this.getLatestWorks();
        this.getLatestEngineers();
        this.getLatestLiteratures();
      }
    }
  }
</script>
