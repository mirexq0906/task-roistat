import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state() {
		return {
			userList: [],
			isActiveModal: false,
			currentModal: '',
		}
	},
	mutations: {
		addUser(state, dataUser) {
			function recursiveAdd(users) {
				if (!dataUser.activeDropdownQuery.value) {
					state.userList.push({
						id: Date.now(),
						name: dataUser.name,
						phone: dataUser.phone,
						subList: [],
					})
				} else {
					for (const user of users) {
						if (user.id === dataUser.activeDropdownQuery.value) {
							const newUser = {
								id: Date.now(),
								name: dataUser.name,
								phone: dataUser.phone,
								subList: [],
							};
							user.subList.push(newUser);
						} else if (user.subList.length > 0) {
							recursiveAdd(user.subList)
						}
					}
				}
			}
			recursiveAdd(state.userList);
		},
		closeModal(state) {
			state.isActiveModal = false
		},
		openModal(state, modal) {
			state.currentModal = modal
			state.isActiveModal = true
		}
	},
	getters: {
		getAllUsers(state) {
			const stack = [...state.userList]
			const result = []
			while (stack.length > 0) {
				const node = stack.pop()
				if (node.id !== undefined && node.name !== undefined) {
					result.push({ value: node.id, name: node.name })
				}
				if (node.subList !== undefined && node.subList.length) {
					stack.push(...node.subList)
				}
			}
			return result
		}
	}
})

export default store