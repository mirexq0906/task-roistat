<template>
  <main>
    <section class="users">
      <div class="container">
        <button class="users__btn btn" @click="openModal('form-user')">Добавить</button>

        <user-list class="users__table" :users="userList" />

        <settings-modal />
      </div>
    </section>
  </main>
</template>

<script>
import UserList from './components/UserList/App.vue'
import SettingsModal from './components/SettingsModal/App.vue'
import { mapMutations, mapState } from 'vuex'
export default {
  components: { UserList, SettingsModal },
  methods: {
    ...mapMutations(['openModal'])
  },

  computed: {
    ...mapState(['userList'])
  }
}
</script>

<style scoped>
.users {
  padding: 50px 0;
}

.users__table {
  margin-top: 30px;
}
</style>
