<template>
    <list v-model="sortQuery">
        <item v-for="item in sortedUsers" :key="item.id" :user="item" />
    </list>
</template>

<script>
import Item from './Item.vue';
import List from './List.vue';
export default {
    components: { List, Item },
    props: {
        users: {
            type: Array,
            require: true,
            default: () => [],
        }
    },
    data() {
        return {
            sortQuery: "",
        }
    },
    computed: {
        sortedUsers() {
            if (this.sortQuery === "name") {
                return [...this.users].sort((user1, user2) =>
                    user1[this.sortQuery].localeCompare(user2[this.sortQuery])
                );
            } else if (this.sortQuery === "phone") {
                return [...this.users].sort((user1, user2) =>
                    Number(user1.phone[3]) - Number(user2.phone[3])
                );
            } else {
                return [...this.users]
            }
        },
    }
}
</script>

<style scoped></style>