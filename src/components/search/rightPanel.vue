<template>
  <div class="right-panel">
    <div class="title">
      <span>热搜词汇</span>
    </div>
    <div class="tag-cloud">
      <svg id="svvg" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"
           @mousemove='listener($event)'>
        <!--<circle :x="140" :y="140" :r="r" stroke="black" stroke-width="0" fill="white"></circle>-->
        <text style="cursor: pointer" v-for="i in textTags"
              :font-size='11>height / 20 * (600 / (600-i.z))?14:height / 20 * (600 / (600-i.z))'
              :fill-opacity='((400+i.z)/600)' :x="i.x" :y="i.y" :z="i.z">{{i.text}}
        </text>
      </svg>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import '../../assets/css/search/rightPanel.scss';
</style>
<script>
  export default {
    mounted: function () {
//      this.CX = parseInt((document.getElementById('svvg').width) / 2)
//      this.CY = parseInt((document.getElementById('svvg').height) / 2)
      this.CX = 140
      this.CY = 140
      this.getTags()
    },
    components: {},
    data () {
      return {
        tags: [
          {
            name: '詹天佑',
          },
          {
            name: '郦道元',
          },
          {
            name: '工程师史',
          },
          {
            name: '地下空间',
          },
          {
            name: '同济大学',
          },
          {
            name: '建筑工程',
          }, {
            name: '城市轨道',
          },
          {
            name: '轨道交通',
          }, {
            name: '城市空间',
          },
          {
            name: '和谐号',
          },
          {
            name: '城际高铁',
          },

        ],
        textTags: [],
        speedX: Math.PI / 360,
        speedY: Math.PI / 360,
        CX: 0,
        CY: 0,
        r: 100,
        height: 300
      }
    },
    methods: {
      getTags: function () {
        let tagsNum = this.tags.length
        let tags = []
        for (var i = 0; i < tagsNum; i++) {
          let tag = {}
          let k = -1 + (2 * (i + 1) - 1) / tagsNum
          let a = Math.acos(k)
          let b = a * Math.sqrt(tagsNum * Math.PI)
          tag.text = this.tags[i].name
          tag.x = this.CX + this.r * Math.sin(a) * Math.cos(b)
          tag.y = this.CY + this.r * Math.sin(a) * Math.sin(b)
          tag.z = this.r * Math.cos(a)
          tags.push(tag)
        }
        this.textTags = tags
      },
      rotate: function () {
        setInterval(() => {
          this.rotateX(this.speedX)
          this.rotateY(this.speedY)
        }, 30)
      },
      rotateX (angleX) {
        var cos = Math.cos(angleX)
        var sin = Math.sin(angleX)
        for (let tag of this.textTags) {
          var y1 = (tag.y - this.CY) * cos - tag.z * sin + this.CY
          var z1 = tag.z * cos + (tag.y - this.CY) * sin
          tag.y = y1
          tag.z = z1
        }
      },
      rotateY (angleY) {
        var cos = Math.cos(angleY)
        var sin = Math.sin(angleY)
        for (let tag of this.textTags) {
          var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX
          var z1 = tag.z * cos + (tag.x - this.CX) * sin
          tag.x = x1
          tag.z = z1
        }
      },
      listener (event) {
        var x = event.clientX - this.CX
        var y = event.clientY - this.CY
        this.speedX = x * 0.0001 > 0 ? Math.min(this.r * 0.00002, x * 0.0001) : Math.max(-this.r * 0.00002, x * 0.0001)
        this.speedY = y * 0.0001 > 0 ? Math.min(this.r * 0.00002, y * 0.0001) : Math.max(-this.r * 0.00002, y * 0.0001)
      },
    },
    computed: {},
    watch: {
      'tags': 'getTags',
      'textTags': 'rotate',
    },
    filters: {}

  }
</script>
