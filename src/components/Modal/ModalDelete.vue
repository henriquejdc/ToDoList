<template>
  <div>
      <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
      >
        <v-card>
          <v-card-title class="text-h5">
            Delete 
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text
          class="mt-2"
          >Are you sure you want to delete the task?</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="red darken-1"
              text
              @click="$emit('closeModal')"
            >
              Cancel
            </v-btn>
            <v-btn
              color="primary"
              text
              @click="handleDelete()"
            >
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    props:['task'],
    data () {
      return {
        dialog: true,
      }
    },
    methods:{
      handleDelete(){
        this.$store.dispatch('removeTask', this.task.id);
        this.$emit('closeModal');
      }
    }
  }
</script>

<style>

</style>