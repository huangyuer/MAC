<template>
  <div class="search-all">
    <!--<div class="title">-->
    <!--<span>找到<span>77,638,132</span>条结果</span>-->
    <!--</div>-->
    <div class="subtitle" v-show="allPageBookList.length>0" :class="{'m-top-21':allPageBookList.length>0}">
      <div class="inner">
        <span>相关图书</span>
        <div class="right">
          <span>查看全部</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiantou-left"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="inners">
      <image-text-item type="图书" :author="i.chiefEditor" :name="i.name" :year="i.publishedAt" :content="i.highlight"
                       :cover="preFix+i.cover" :keywords="i.keywords" v-for="i in allPageBookList"
                       :key="i.id"></image-text-item>
    </div>
    <div class="subtitle" v-show="allPageProjectList[0].children.length>0"
         :class="{'m-top-21':allPageProjectList[0].children.length>0}">
      <div class="inner">
        <span>相关工程</span>
        <div class="right">
          <span>查看全部</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiantou-left"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="row" v-for="i in allPageProjectList" :key="i.id">
      <image-item :cover="j.cover" :title="j.title" :summary="j.summary" v-for="j in i.children"
                  :key="i.id"></image-item>
    </div>
    <div class="subtitle" v-show="allPageEngineerList[0].children.length>0"
         :class="{'m-top-21':allPageEngineerList[0].children.length>0}">
      <div class="inner">
        <span>相关工程师</span>
        <div class="right">
          <span>查看全部</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiantou-left"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="row" v-for="i in allPageEngineerList" :key="i.id">
      <image-item :cover="j.avatar" :title="j.name" :summary="j.summary" v-for="j in i.children"
                  :key="i.id"></image-item>
    </div>
    <div class="subtitle" v-show="allPageMediaList[0].children.length>0"
         :class="{'m-top-21':allPageMediaList[0].children.length>0}">
      <div class="inner">
        <span>相关多媒体</span>
        <div class="right">
          <span>查看全部</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiantou-left"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="row" v-for="i  in allPageMediaList" :key="i.id">
      <image-item :cover="preFix+j.url" :title="j.title" :summary="j.description" v-for="j in i.children"
                  :key="j.id"></image-item>
    </div>
    <div class="subtitle" v-show="allPageRequirementList.length>0"
         :class="{'m-top-21':allPageRequirementList.length>0}">
      <div class="inner">
        <span>企业需求</span>
        <div class="right">
          <span>查看全部</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiantou-left"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="inners">
      <image-text-item type="企业需求" :name="i.name" :year="i.createdAt" :content="i.content"
                       :keywords="i.keywords" v-for="i in allPageRequirementList" :key="i.id"></image-text-item>
    </div>
    <div class="subtitle" v-show="allPageLiteratureList.length>0" :class="{'m-top-21':allPageLiteratureList.length>0}">
      <div class="inner">
        <span>工程文献</span>
        <div class="right">
          <span>查看全部</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiantou-left"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="inners">
      <image-text-item type="工程文献" :name="i.name" :year="i.createdAt" :content="i.summary"
                       v-for="i in allPageLiteratureList" :key="i.id"></image-text-item>
    </div>
    <div class="subtitle" v-show="allPageKnowledgeList.length>0" :class="{'m-top-21':allPageKnowledgeList.length>0}">
      <div class="inner">
        <span>知识产权</span>
        <div class="right">
          <span>查看全部</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiantou-left"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="inners">
      <image-text-item :type="i.type" :name="i.name" :year="i.createdAt" :content="i.summary"
                       v-for="i in allPageKnowledgeList" :key="i.id"></image-text-item>
    </div>
    <div style="margin-bottom: 80px;"></div>
  </div>
</template>
<style lang="scss" scoped>
  @import '../../assets/css/search/searchAll.scss';
</style>
<script>
  import imageTextItem from './imageTextItem.vue'
  import imageItem from './imageItem.vue'

  export default {
    mounted: function () {
      let p = {
        searchContent: this.searchContent
      }
      this.$store.dispatch('searchAll', p)
    },
    components: {
      imageTextItem,
      imageItem,
    },
    data () {
      return {
        preFix: 'http://118.178.238.202:9988/'
      }
    },
    methods: {},
    computed: {
      allPageBookList: function () {
        return this.$store.state.search.allPageBookList
      },
      allPageProjectList: function () {
        return this.$store.state.search.allPageProjectList
      },
      allPageEngineerList: function () {
        return this.$store.state.search.allPageEngineerList
      },
      allPageMediaList: function () {
        return this.$store.state.search.allPageMediaList
      },
      allPageRequirementList: function () {
        return this.$store.state.search.allPageRequirementList
      },
      allPageLiteratureList: function () {
        return this.$store.state.search.allPageLiteratureList
      },
      allPageKnowledgeList: function () {
        return this.$store.state.search.allPageKnowledgeList
      },
      searchContent: function () {
        return this.$store.state.searchComponent.searchContent
      }
    },
    filters: {}

  }
</script>
