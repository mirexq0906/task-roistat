<template>
  <form class="user-form" @submit.prevent="handleCreateUser">
    <h3 class="user-form__title">Добавить пользователя</h3>

    <div class="user-form__inputs">
      <input class="input" v-model="name" type="text" placeholder="Введите имя">
      <span class="user-form__valid" ref="validName"></span>
      <input class="input" v-model="phone"  v-mask="'+7(###)-###-##-##'" type="text" placeholder="Введите телефон">
      <span class="user-form__valid" ref="validPhone"></span>
      <my-dropdown :query="dropdownQuery" v-model="activeDropdownQuery" />
    </div>

    <button class="user-form__btn btn" type="submit">Добавить</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'
import MyDropdown from '../UI/MyDropdown.vue'
export default {
  components: { MyDropdown },
  props: {
    dropdownQuery: {
      type: Array,
      default: () => []
    }
  },
  emits: ['sendForm'],
  data() {
    return {
      name: '',
      phone: '',
      activeDropdownQuery: {},
    }
  },
  methods: {
    ...mapMutations(['closeModal']),
    handleCreateUser() {
      let isValid = false
      if (!this.name.length) {
        this.$refs.validName.innerHTML = "Поле не должно быть пустым"
        isValid = true
      }
      if (this.phone.length !== 17) {
        this.$refs.validPhone.innerHTML = "Поле должно иметь 10 цифр"
        isValid = true
      }
      if (!isValid) {
        this.$emit('create', { name: this.name, phone: this.phone, activeDropdownQuery: this.activeDropdownQuery })
        this.name = ''
        this.phone = ''
        this.activeDropdownQuery = {}
        this.closeModal()
      }
    }
  }
}
</script>

<style scoped>
.user-form {
  user-select: none;
}

.user-form__title {
  margin-bottom: 15px;
}

.user-form__inputs {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.user-form__valid {
  color: red;
}

.user-form__btn {
  margin-top: 15px;
}
</style>