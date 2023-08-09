<template>
  <div>
    <v-col
    cols="12"
    >
      <v-text-field
        v-model="fieldInput"
        label="What is your task?"
        outlined
        clearable
        @keyup.enter="handleAddTask"
      ></v-text-field>
    </v-col>
  </div>
</template>

<script>
export default {
    data(){
      return{
        fieldInput: null,
      }
    },
    methods:{
      handleAddTask(){
        this.$store.dispatch('addTask', this.fieldInput)
        this.fieldInput = null;
      }
    }
}
</script>

<style>

</style>