export const modalModule = {
  state: () => ({
    isActiveModal: false,
    currentModal: '',
  }),
  mutations: {
    closeModal(state) {
      state.isActiveModal = false
    },
    openModal(state, modal) {
      state.currentModal = modal
      state.isActiveModal = true
    }
  },
}
