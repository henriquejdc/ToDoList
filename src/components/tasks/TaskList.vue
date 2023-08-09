<template>
    <div>
        <drop-list :items="taskDones" 
        @reorder="$event.apply(taskDones)" 
        >
            <template 
            v-slot:item="{item, reorder}"
            >
                <drag 
                :key="item.id" 
                :data="item" 
                >
                    <Task 
                    style="background-color: white"
                    :style="reorder ? {borderLeft: '2px solid #1976D2', marginLeft:'-2px'} : {}"
                    :task="item"
                    />
                    <v-divider/>
                </drag>
            </template>
            
        </drop-list>
    </div>
</template>

<script>
import {Drag,DropList} from "vue-easy-dnd";
import Task from './Task.vue';

export default {
    components: {
        Drag,
        DropList,
        Task,
    },
    computed:{
        taskDones(){
            return this.$store.state.tasks;
        }
    }
}
</script>

<style>

</style>