<template>
  <sort-list v-model="sortQuery">
    <item v-for="item in sortedUsers" :key="item.id" :user="item" />
  </sort-list>
</template>

<script>
import Item from './Item.vue';
import SortList from './SortList.vue';
export default {
  components: { SortList, Item },
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
      const recursiveSort = (arr) => {
        if (this.sortQuery === "name") {
          arr.sort((user1, user2) =>
            user1[this.sortQuery].localeCompare(user2[this.sortQuery])
          );
        } else if (this.sortQuery === "phone") {
          arr.sort((user1, user2) =>
            Number(user1.phone[3]) - Number(user2.phone[3])
          );
        } else {
          return
        }

        for (const user of arr) {
          if (user.subList.length > 0) {
            recursiveSort(user.subList)
          }
        }
      }
      const usersSort = JSON.parse(JSON.stringify(this.users));
      recursiveSort(usersSort);
      return usersSort
    },
  }
}
</script>

<style scoped></style>
