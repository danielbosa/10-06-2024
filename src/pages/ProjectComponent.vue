<template>
    <div v-if="project">
        <h1>{{ project.title }}</h1>
        <img :src="store.imagBasePath + project.image" alt="project.title">
    </div>
    
</template>

<script>
    import {store} from '../store.js';
    import axios from 'axios';

    export default {
        name: 'ProjectComponent',
        data(){
            return{
                store,
                project: null,
            }
        },
        methods: {
            getProject(){
                console.log(this.$route);
                axios.get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`).then((res) =>{
                    console.log(res.data.results);
                    this.project = res.data.results;
                }).catch((error) =>{
                    //console.log(error);
                    //console.log(error.response.data);
                    this.$router.push({ name: 'not-found'});
                }).finally();
            }
        },
        mounted(){
            this.getProject();
        },
        created(){
            //to make content of component showed in route-view to be updated, if I want to change content without changing component (for example, if I put in this component other links to other projects: same component, Vue would not update the content showed: for him, it would be the same component!)
            this.$watch(
                () => this.$route.params,
                (toParams, previousParams) => {
                // react to route changes...
                this.getPost();
                }
            )
        }
    }
</script>

<style lang="scss" scoped>

</style>