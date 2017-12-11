<template>
  <div class="engineer_wrapper">

    <engineer-header-bg></engineer-header-bg>
    <engineer-header-bar></engineer-header-bar>

    <div class="engineer_list_wrapper">

      <!--工程文献-->
      <div class="engineer_list">
        <div class="engineer_list_left">
          <div class="engineer_list_left_img">
            <img src="../../assets/images/literature_avatar.png"/>
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
    components: {
      engineerHeaderBg,
      engineerHeaderBar,
      literatureItem
    },
    data() {
      return {
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
    }
  }

</script>
