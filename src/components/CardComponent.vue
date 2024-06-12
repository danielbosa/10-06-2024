<template>

    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="getImage" class="img-fluid rounded-start" :alt="item.title">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                    <!-- <p class="card-text" v-html="item.content"></p> -->
                    <p class="card-text"><small class="text-body-secondary">Last updated: {{ item.updated_at}}</small>
                    </p>
                    <span class="badge rounded-pill text-bg-warning me-3">{{ item.type?.name }}</span>
                    <Router-link :to="{ name: 'single-project', params: { 'slug': item.slug }}" class="btn btn-success">Visita project</Router-link>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import {store} from '../store';
    export default {
        name: 'CardComponent',
        props: ['item'],
        data(){
            return{
                store
            }
        },
        computed: {
            getImage(){
                return this.item.image ? this.store.imagBasePath + this.item.image : '/images/placeholder.png';
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>