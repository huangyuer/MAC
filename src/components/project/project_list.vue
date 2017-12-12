<template>
  <div class="engineer_wrapper">

    <engineer-header-bg></engineer-header-bg>
    <engineer-header-bar></engineer-header-bar>

    <div class="engineer_list_wrapper">

      <!--工程-->
      <div class="engineer_list">
        <div class="engineer_list_left">
          <div class="engineer_list_left_img">
            <img src="../../assets/images/project_avatar.png"/>
          </div>
          <h4>工程项目</h4>
          <p>收录了从古代到改革开放依赖的著名工程师，包括等等</p>
        </div>
        <div class="engineer_list_right">
          <ul>
            <li v-for="project in projectList">
              <router-link :to="'/project/info/' + project.id">
                <project-item :project="project"></project-item>
              </router-link>
            </li>
          </ul>
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
        projectList: [
          {
            id: '1',
            imgUrl: '',
            title: '隋代敝肩坦弧拱桥赵州桥桥台及基地地质图',
            author: '桥梁工程师李春',
            category: '建筑',
            count: 232,
            date: '隋大业元年（605年）'
          },
          {
            id: '2',
            imgUrl: '',
            title: '隋代敝肩坦弧拱桥赵州桥桥台及基地地质图',
            author: '桥梁工程师李春',
            category: '建筑',
            count: 233,
            date: '隋大业元年（605年）'
          },
          {
            id: '3',
            imgUrl: '',
            title: '隋代敝肩坦弧拱桥赵州桥桥台及基地地质图',
            author: '桥梁工程师李春',
            category: '建筑',
            count: 232,
            date: '隋大业元年（605年）'
          }
        ]
      }
    }
  }

</script>
