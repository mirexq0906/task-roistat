<template>
    <div class="user-item">
        <div :class="{ active: isActive }" class="user-item__row">
            <div class="user-item__ceil" :style="{cursor: user.subList.length ? 'pointer' : 'auto'}" @click="openAccordion">
                <span class="user-item__icon">
                    <img v-show="user.subList.length" src="static/caret-down-fill.svg" alt="">
                </span>

                {{ user.name }}
            </div>

            <div class="user-item__ceil">
                {{ user.phone }}
            </div>
        </div>
        <transition name="fade">
            <div v-show="isActive">
                <item class="user-item__subitem" v-for="subItem in user.subList" :key="subItem.id" :user="subItem" />
            </div>
        </transition>

    </div>
</template>
<script>
export default {
    name: "Item",
    props: {
        user: {
            type: Object,
            require: true,
            default: () => { },
        }
    },
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        openAccordion() {
            if (this.user.subList.length) {
                this.isActive = !this.isActive
            }
        }
    }
}
</script>
<style scoped>
.user-item__row {
    display: flex;
    gap: 3px;
    margin-bottom: 3px;
}

.user-item__row.active .user-item__ceil:first-child {
    background: #949494;
    color: #fff;
}

.user-item__row.active .user-item__icon img {
    transform: rotate(180deg);
}

.user-item__ceil {
    padding: 10px;
    background: #fff;
}

.user-item__icon img {
    transition: 500ms transform;
}

.user-item__ceil:first-child {
    display: flex;
    align-items: center;
    gap: 10px;
    width: calc(40% - 3px / 2);
    transition: 500ms all;
}

.user-item__ceil:last-child {
    width: calc(60% - 3px / 2);

}

.user-item__subitem .user-item__ceil:first-child {
    padding-left: 30px;
}



.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>