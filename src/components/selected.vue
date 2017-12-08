<template>
  <div class="engineer_wrapper">

    <engineer-header-bg></engineer-header-bg>
    <engineer-header-bar></engineer-header-bar>

    <div class="engineer_list_wrapper">

      <!--工程师-->
      <div class="engineer_list">
        <div class="engineer_list_left">
          <div class="engineer_list_left_img">
            <img src="../assets/images/engineer_avatar.png"/>
          </div>
          <h4>工程师</h4>
          <p>收录了从古代到改革开放以来的著名工程师，包括等等</p>
        </div>
        <div class="engineer_list_right">
          <ul>
            <li v-for="engineer in engineerList">
              <router-link :to="'/engineer/info/' + engineer.id">
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
        <div class="engineer_list_left">
          <div class="engineer_list_left_img">
            <img src="../assets/images/project_avatar.png"/>
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
        <div class="engineer_list_left">
          <div class="engineer_list_left_img">
            <img src="../assets/images/literature_avatar.png"/>
          </div>
          <h4>工程文献</h4>
          <p>收录了从古代到改革开放以来的著名工程师，包括等等</p>
        </div>
        <div class="literature_list_right">
          <ul>
            <li v-for="literature in literatureList">
              <router-link :to="'/literature/info/' + literature.id">
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
        engineerList: [
          {
            id: '1',
            imgUrl: '',
            title: '桥梁工程师李春',
            info: '李春是隋朝时期的著名工匠,他建造了举世闻名的赵州桥。',
            category: '建筑',
            count: 232,
            date: '隋大业元年（605年）'
          },
          {
            id: '2',
            imgUrl: '',
            title: '桥梁工程师李春',
            info: '李春是隋朝时期的著名工匠,他建造了举世闻名的赵州桥。',
            category: '建筑',
            count: 233,
            date: '隋大业元年（605年）'
          },
          {
            id: '3',
            imgUrl: '',
            title: '桥梁工程师李春',
            info: '李春是隋朝时期的著名工匠,他建造了举世闻名的赵州桥。',
            category: '建筑',
            count: 232,
            date: '隋大业元年（605年）'
          },
          {
            id: '4',
            imgUrl: '',
            title: '桥梁工程师李春',
            info: '李春是隋朝时期的著名工匠,他建造了举世闻名的赵州桥。',
            category: '建筑',
            count: 233,
            date: '隋大业元年（605年）'
          },
          {
            id: '5',
            imgUrl: '',
            title: '桥梁工程师李春',
            info: '李春是隋朝时期的著名工匠,他建造了举世闻名的赵州桥。',
            category: '建筑',
            count: 232,
            date: '隋大业元年（605年）'
          }
        ],
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
        ],
        literatureList: [
          {
            id: '1',
            imgUrl: '',
            title: '最早的手工业工程技术文献——《考工记》',
            info: '《考工记》是中国目前所见最早的手 工业工程技术文献,也是最早的指导工程实践的规范,在中国乃至世界的科技史、工程史和文化史上都占有重要地位。',
            author: '作者不详',
            category: '手工业工程',
            count: 232,
            date: '春秋战国'
          },
          {
            id: '2',
            imgUrl: '',
            title: '最早的手工业工程技术文献——《考工记》',
            info: '《考工记》是中国目前所见最早的手 工业工程技术文献,也是最早的指导工程实践的规范,在中国乃至世界的科技史、工程史和文化史上都占有重要地位。',
            author: '作者不详',
            category: '手工业工程',
            count: 232,
            date: '春秋战国'
          },
          {
            id: '3',
            imgUrl: '',
            title: '最早的手工业工程技术文献——《考工记》',
            info: '《考工记》是中国目前所见最早的手 工业工程技术文献,也是最早的指导工程实践的规范,在中国乃至世界的科技史、工程史和文化史上都占有重要地位。',
            author: '作者不详',
            category: '手工业工程',
            count: 232,
            date: '春秋战国'
          }
        ]
      }
    },
    components: {
      engineerHeaderBg,
      engineerHeaderBar,
      engineerItem,
      projectItem,
      literatureItem
    }
  }
</script>
