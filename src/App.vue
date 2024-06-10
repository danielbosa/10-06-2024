<template>
  <h1 class="text-center">Ciao</h1>
  <i class="fa fa-solid fa-home"></i>

  <ul>
    <li v-for="(item, index) in menuItems" :key="index">
      <router-link :to="{ name: item.routeName}" class="nav-link">
        {{ item.label }}
      </router-link>
    </li>
  </ul>

  <router-view></router-view>
</template>

<script>

  export default {
    name: 'App',
    data(){
      return{
        menuItems: [
          {
            label: 'Home',
            routeName: 'home'
          },
          {
            label: 'Projects',
            routeName: 'projects'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>