import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore',{
    state: () => ({
        tasks:[
            {id:1,title:"This is Number 1" ,isFav:false},
            {id:2,title:"This is Number 2" ,isFav:true}
        ],
        name: 'razob'
    })
})
