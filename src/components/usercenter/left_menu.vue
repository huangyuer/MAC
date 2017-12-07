<template> 
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
    
</template>

<script>
  import {checkLoginCookie} from '../../assets/js/cookie'
  import {errorHandle} from '../../assets/js/common'
  export default {
    name: 'UserLeftMenu',
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
        this.$axios.get('v1/users/' + id + '/baseinfo')
          .then(responseData => {
            this.avatarUrl = responseData.data.avatar
          })
          .catch(error => {
            errorHandle(error)
          })
      }
    },
    mounted () {
      this.checkToken()
      this.initData()
    }
  }
</script>

<style>
</style>
