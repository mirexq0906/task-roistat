<template>
  <div class="modal" :class="{ 'modal-active': isActiveModal }" @click="closeModal">
    <div class="modal__content" :class="{ 'modal__content-active': isActiveModal }" @click.stop>
      <span class="modal__close" @click="closeModal">
        <img src="static/icon-close.svg" alt="" />
      </span>

      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      isActiveModal: state => state.modal.isActiveModal
    })
  },
  methods: {
    ...mapMutations(["closeModal"])
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
  height: 100%;
  width: 100%;
  background-color: rgba(1, 1, 1, 0.7);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease;
  padding: 100px 100px;
  overflow: auto;
  text-align: center;
}

.modal::before {
  content: "";
  display: inline-block;
  font-size: 0;
  height: 100%;
  vertical-align: middle;
  width: 0;
}

.modal-active {
  opacity: 1;
  pointer-events: all;
}

.modal__content {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 500px;
  padding: 60px 30px 30px 30px;
  border-radius: 20px;
  background-color: white;
  transform: scale(0.5);
  transition: transform 0.4s ease;
  vertical-align: middle;
  text-align: left;
}

.modal__content-active {
  transform: scale(1);
}

.modal__close {
  position: absolute;
  display: inline-block;
  right: 5px;
  top: 5px;
  padding: 15px;
  cursor: pointer;
}

.modal__close img {
  width: 25px;
}

@media (max-width: 575px) {
  .modal {
    padding: 20px;
  }

  .modal__content {
    padding: 60px 20px 20px 20px;
  }
}
</style>
