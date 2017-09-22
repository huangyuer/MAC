<template>
  <div class="z_bg">
    <div class="top_bg">
      <div class="top">
        <div class="grzx_grzx">
          <router-link to="/user/info">
            <a href="javascript:void(0);">
              <img src="../../assets/images/grzx_ico1.png" alt="">
            </a>
          </router-link>
          <router-link to="/user/info">
            <a href="javascript:void(0);">
              <p>个人中心</p>
            </a>
          </router-link>
        </div>
        <div class="z_home home ">
          <router-link to="/"><a href="javascript:void(0);">首页</a></router-link>
          |
          <router-link to="/about_us"><a href="javascript:void(0);">关于我们</a></router-link>
        </div>
      </div>
    </div>
    <div class="grzx_main">
      <div class="grzx_left">
        <div class="grzx_left1">个人中心</div>
        <div class="grzx_left2"><img :src="avatarUrl" alt=""></div>
        <div class="grzx_left3">
          <ul>
            <router-link to="/user/info"><li><a href="javascript:void(0);">基本信息</a></li></router-link>
            <router-link to="/user/favorites"><li><a href="javascript:void(0);">收藏夹</a></li></router-link>
            <router-link to="/user/messages"><li><a href="javascript:void(0);">站内信</a></li></router-link>
            <router-link to="/user/resources"><li><a href="javascript:void(0);">共享资料</a></li></router-link>
          </ul>
        </div>
      </div>
      <router-view class="grzx_right">
      </router-view>
    </div>
  </div>
</template>

<script>
  import {checkLoginCookie, getCookie} from '../../assets/js/cookie'
  import API_ROOT from '../../assets/js/config'
  export default {
    name: 'user',
    data () {
      return {
        avatarUrl: ''
      }
    },
    methods: {
      // 检查是否登录或token是否失效
      checkToken: function () {
        if (!checkLoginCookie()) {
          // 若已失效则跳转到登录页
          alert('您尚未登录，请重新登录！')
          this.$router.push({path: '/sign_in'})
        }
      },
      // 初始化请求数据
      initData: function () {
        var id = window.localStorage.id
        this.$axios.get(API_ROOT + 'users/' + id + '/details', {headers: {Authorization: 'Bearer ' + getCookie('sessionToken')}})
          .then(responseData => {
            this.avatarUrl = responseData.data.avatar
          })
          .catch(error => {
            if (error.response) {
              // 捕获非2xx异常
              alert('Error:获取个人信息失败！')
            } else {
              // 网络错误触发
              alert('Error:' + error.message)
            }
          })
      }
    },
    mounted () {
      this.checkToken()
      this.initData()
    }
  }
</script>

<style src="../../assets/css/style.css">
</style>
