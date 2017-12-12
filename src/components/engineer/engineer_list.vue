<template>
  <div class="engineer_wrapper">

    <engineer-header-bg></engineer-header-bg>
    <engineer-header-bar></engineer-header-bar>

    <div class="engineer_list_wrapper">

      <!--工程师-->
      <div class="engineer_list">
        <div class="engineer_list_left">
          <div class="engineer_list_left_img">
            <img src="../../assets/images/engineer_avatar.png"/>
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
        </div>
      </div>
      <div class="clear"></div>

    </div>
  </div>
</template>

<script>
  import engineerHeaderBg from './engineer_header_bg.vue'
  import engineerHeaderBar from './engineer_header_bar.vue'
  import engineerItem from './engineer_item.vue'
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
        ]
      }
    },
    components: {
      engineerHeaderBg,
      engineerHeaderBar,
      engineerItem,
    }
  }
</script>
