import db from '../services/localbase.js';

export default{
    async addTask({commit}, title){
        await commit('addTask', title)
        await commit('searchTasks')
    },
    editaTarefa({commit}, novaTarefa){
        db.collection('tasks').doc({ id: novaTarefa.id }).update({
            title: novaTarefa.title
        }).then(()=>{
            commit('searchTasks')
        })
    },
    completeTask({commit}, novaTarefa){
        db.collection('tasks').doc({ id: novaTarefa.id }).update({
            concluido: !novaTarefa.concluido
        }).then(()=>{
            commit('searchTasks')
        })
    },
    removeTask({commit}, id){
        db.collection('tasks').doc({ id }).delete().then(()=>{
            commit('searchTasks')     
        })
    }
}