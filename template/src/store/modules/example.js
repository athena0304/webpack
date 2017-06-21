import * as types from '../mutation-types'

const state = {
	//导航栏结构数据
	navbarData: structure,
	//当前侧边栏是属于哪个一级模块
	currentSidebarIndex: 0,
	//当前路由所在的二级模块
	currentModuleIndex: 0,
	//侧边栏是否是mini状态
	isSidebarMini: false,
}
const getters = {
	navbarData: state => state.navbarData,
	currentSidebarIndex: state => state.currentSidebarIndex,
	currentModuleIndex: state => state.currentModuleIndex,
	isSidebarMini: state => state.isSidebarMini,
}

// actions
const actions = {
	changeSidebar ({ commit, state }, val) {
		commit(types.CHANGE_SIDEBAR, val)
	},
	changeModuleIndex ({ commit, state }, val) {
		commit(types.CHANGE_MODULE_INDEX, val)
	},
	toggleSidebar ({ commit, state }) {
		commit(types.TOGGLE_SIDEBAR)
	},
	checkPermission({ commit, state }, data) {
		// console.log(data)
		commit(types.CHECK_PERMISSION, data)
	}
}

// mutations
const mutations = {
	[types.CHANGE_SIDEBAR](state, val) {
		state.currentSidebarIndex = val;
	},
	[types.CHANGE_MODULE_INDEX](state, val) {
		state.currentModuleIndex = val;
	},
	[types.TOGGLE_SIDEBAR](state) {
		state.isSidebarMini = !state.isSidebarMini;
	},
	[types.CHECK_PERMISSION](state, permission) {

		for(var key in permission) {
			state.navbarData.forEach((item, index, array) => {
				let notAllow0 = false;
				if(!item.href) {
					item.list.forEach((item1, index1, arr1) => {
						let notAllow1 = false;
						item1.listItem.forEach((item2, index2, arr2) => {
							if(item2.name == key) {
								item2.isAllow = permission[key]
								if(item2.isAllow) {
									notAllow0 = true
									notAllow1 = true;
								}
							}
						})
						if(notAllow1) {
							item1.isAllow = true;
						}

					})
					if(notAllow0) {
						item.isAllow = true;
					}
				}

			})
		}
	},
}

export default {
  state,
  actions,
  getters,
  mutations
}
