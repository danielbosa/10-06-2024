<template>
    <div class="d-flex justify-content-between align-items-center">
        <h1>All Projects</h1>
        <select name="type" id="type">
            <option value="">Tutti i tipi</option>
            <option value="type.id" v-for="type in store.types" :key="type.id">{{ type.name }}
            </option>
        </select>
    </div>

    <div class="row">
        <div class="col-12 col-lg-6" v-for="project in projects" :key="project.id">
            <CardComponent :item="project"/>
        </div>

    </div>
</template>

<script>
    import {store} from '../store.js';
    import axios from 'axios';
    import CardComponent from '../components/CardComponent.vue';
    export default {
    name: 'ProjectList',
    components: {
        CardComponent,
    },
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