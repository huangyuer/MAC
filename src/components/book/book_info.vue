<template>
  <div class="bg">
    <header-bar></header-bar>
    <div class="clear"></div>
    <search-bar></search-bar>
    <div class="clear"></div>
    <div class="list_main">
      <div class="main_left">
        <div class="list_left list_left_bg">
          <div class="class_title"><span>本书目录</span></div>
          <div class="book_list">
            <div class="book_title">
              <p>第一章 主要项目基本知识问答</p>
              <span>-</span>
            </div>
            <ul>
              <li><a href="">1.田径</a></li>
              <li><a href="">2.游泳</a></li>
              <li><a href="">3.跳水</a></li>
              <li><a href="">4.举重</a></li>
            </ul>
          </div>
          <div class="book_list">
            <div class="book_title">
              <p>第二章 主要项目基本知识问答</p>
              <span>-</span>
            </div>
            <ul>
              <li><a href="">1.田径</a></li>
              <li><a href="">2.游泳</a></li>
              <li><a href="">3.跳水</a></li>
              <li><a href="">4.举重</a></li>
            </ul>
          </div>
          <div class="book_list">
            <div class="book_title">
              <p>第三章 主要项目基本知识问答</p>
              <span>-</span>
            </div>
          </div>
          <div class="book_list">
            <div class="book_title">
              <p>第四章 主要项目基本知识问答</p>
              <span>-</span>
            </div>
          </div>
          <div class="book_list">
            <div class="book_title">
              <p>第五章 主要项目基本知识问答</p>
              <span>-</span>
            </div>
          </div>
        </div>
        <div class="list_cent">
          <div class="book_li">
            <p>运营之光</p>
            <dl >
              <dd style="float: left">
                <div class="dl_img"><img src="../../assets/images/img2.jpg" alt=""></div>
              </dd>
              <dd style="float: left">
                <p><span>作者:</span><a href="">中国体育记者协会</a>编 </p>
                <p><span>出版社:</span>电子工业出版社</p>
                <p><span>副标题:</span>我的互联网运营方法论与自白</p>
                <p><span>出版年:</span>2016-9-1</p>
                <p><span>页数:332</span></p>
                <p><span>中国法分类号:</span>G8-49</p>
                <p><span>参考文献格式:</span>中国体育记者协会编，体育知识咨询录。北京：人民体育出版社1988.2</p>
              </dd>
            </dl>
          </div>
          <div class="clear"></div>
          <div class="book_bt"><span>内容介绍</span></div>
          <div class="book_info">
            在互联网行业内，“运营”这个职能发展到一定阶段后，往往更需要有成熟的知识体系和工作方法来给予行业从业者们以指引。<br>
            《运营之光：我的互联网运营方法论与自白》尤其难得之处在于：它既对“什么是运营”这样的概念认知类问题进行了解读，又带有大量实际的工作技巧、工作思维和工作方法，还包含了很多对于运营的思考、宏观分析和建议，可谓内容完整而全面，同时书中加入了作者亲历的大量真实案例，让全书读起来深入浅出、耐人寻味。<br>
            从内容的受众来说，它既有面向初入互联网行业的运营从业者们的具体工作方法讲解和建议，又有适合3～5年运营从业者们阅读的一些案例解析、思考方法分享，也有更适合创业者、互联网公司高管阅读的一些运营体系搭建、不同类型产品所适合的运营方法等更为宏观的问题的解读。<br>
            我们希望它可以成为面向互联网运营从业者和创业者们的一本经典读物。
          </div>
          <div class="book_bt"><span>作者介绍</span></div>
          <div class="book_info">
            互联网运营从业近10年，曾先后就职于美国About.com、第九课堂、新浪微米、周伯通招聘等互联网公司，历任运营经理、COO助理、COO等职。<br>
            现任互联网人在线学习社区三节课（sanjieke.cn）联合创始人。
          </div>
        </div>

      </div>
      <div class="list_right">
        <a href=""><img src="../../assets/images/img1.jpg" alt=""></a>
        <a href=""><img src="../../assets/images/img1.jpg" alt=""></a>
      </div>
    </div>
    <div class="clear"></div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import headerBar from '../public/header_bar.vue'
  import footerBar from '../public/footer_bar.vue'
  import searchBar from '../public/search_bar.vue'
  export default {
    name: 'book_info',
    data () {
      return {
      }
    },
    components: {
      headerBar,
      footerBar,
      searchBar
    }
  }
</script>

<style src="../../assets/css/style.css">
</style>
