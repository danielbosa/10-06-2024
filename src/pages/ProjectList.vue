<template>
    <ul>
    <li v-for="project in projects" :key="project.id">{{ project.title }}
        <img :src="store.imagBasePath + project.image" :alt="project.title">
        <div>{{ project.type?.name }}</div>

        <Router-link :to="{ name: 'single-project', params: { 'slug': project.slug }}">Visita project</Router-link>
    </li>
    </ul>
</template>

<script>
    import {store} from '../store.js';
    import axios from 'axios';
    export default {
    name: 'ProjectList',
    data(){
        return{
        store,
        projects : []
        }
    },
    methods: {
        getAllProjects(){
        axios.get(this.store.apiBaseUrl + '/projects').then((res) =>{
            console.log(res.data)
            this.projects = res.data.results;
            //ATTN: in caso di paginazione, cambia chiave dove trovo i risultati ---> res.data.results.data
        })
        }
    },
    mounted(){
        this.getAllProjects();
    }
}
</script>

<style lang="scss" scoped>

</style>