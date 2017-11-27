<template>
  <div class="right-panel">
    <div class="title">
      <span>热搜词汇</span>
    </div>
    <div class="tag-cloud">
      <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="140" cy="140" r="140" stroke="black" stroke-width="0" fill="red">
        </circle>
        <text v-for="i in textTags" :font-size='14 || height / 20 * (600 / (600-i.z))' :fill-opacity='((400+i.z)/600)' :x="i.x" :y="i.y">{{i.name}}</text>
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
      this.CX = parseInt(getComputedStyle(document.querySelector('svg')).width) / 2
      this.CY = parseInt(getComputedStyle(document.querySelector('svg')).height) / 2
      this.getTags()
    },
    components: {},
    data () {
      return {
        tags: [
          {
            name: '机智云',
          },
          {
            name: '青云',
          }
        ],
        textTags: [],
        speedX: Math.PI / 360,
        speedY: Math.PI / 360,
        CX: 0,
        CY: 0,
        r: 140,
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
          tag.href = `/tags?tag=${tag.text}`
          console.log(tag)
          tags.push(tag)
        }
        this.textTags = tags
      },
      rotate: function () {
        setInterval(()=>{
          this.rotateX(this.speedX)
          this.rotateY(this.speedY)
        },170)
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
    },
    computed: {},
    watch: {
      'tags': 'getTags',
      'textTags': 'rotate',
    },
    filters: {}

  }
</script>
