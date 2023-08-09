<template>
  <div>
    <TaskList />
    <div
    v-if="!$store.state.tasks.length"
    class="mt-16 animate__animated animate__bounceInUp"
    >
      <center>
        <v-icon
        size="100"
        color="primary"
        >
          mdi-check
        </v-icon>

        <div
        class="text-h5 primary--text"
        >
          No task
        </div>

      </center>
    </div>
  </div>
</template>

<script>
import TaskList from '../components/tasks/TaskList.vue';

  export default {
    name: 'Home',
    components: {
      TaskList
    },
    created(){
      this.$store.commit('searchTasks');
    },
  }
</script>
