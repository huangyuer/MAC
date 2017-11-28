const state = {
  title: '热搜词汇',
  showCloud: true,
}

const actions = {}

const mutations = {
  setRightPanelNull (state) {
    this.title = '暂无数据'
    this.showCloud = false
  }
}

export default {
  state,
  actions,
  mutations,
}
