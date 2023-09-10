<template>
  <main-modal>
    <form-user @create="(dataUser) => addUser(dataUser)" :dropdownQuery="getAllUsers"
      v-if="currentModal === 'form-user'" />
  </main-modal>
</template>

<script>
import MainModal from './MainModal.vue'
import FormUser from './FormUser.vue'
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
  components: { MainModal, FormUser },
  computed: {
    ...mapGetters(['getAllUsers']),
    ...mapState({
      currentModal: state => state.modal.currentModal,
    }),
  },
  methods: {
    ...mapMutations(['addUser'])
  }
}
</script>

<style scoped></style>
