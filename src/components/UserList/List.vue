<template>
    <div class="table-user">
        <div class="table-user__title">
            <div class="table-user__ceil" @click="changeSort('name')">
                Имя
            </div>

            <div class="table-user__ceil" @click="changeSort('phone')">
                Телефон
            </div>
        </div>
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: () => '',
        }
    },
    emits: ['input'],
    methods: {
        changeSort(value) {
            if (this.value !== value) {
                this.$emit('input', value)
            } else {
                this.$emit('input', '')
            }
        }
    }
}
</script>

<style scoped>
.table-user {
    user-select: none;
}

.table-user__title {
    display: flex;
    gap: 3px;
    margin-bottom: 3px;
    font-weight: 600;
}

.table-user__ceil {
    padding: 10px;
    background: #fff;
    cursor: pointer;
}

.table-user__ceil:first-child {
    width: calc(40% - 3px / 2);
}

.table-user__ceil:last-child {
    width: calc(60% - 3px / 2);
}
</style>