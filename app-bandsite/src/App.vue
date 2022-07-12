<template>
<head>
  <title>Bandsite</title>
</head>
 <div>
  <router-link to="/">Home</router-link>
  <router-link to="/vnosi">Vnosi</router-link>
  <router-link to="/izpis">izpis</router-link>
  
 </div>
<!-- Sekcija: router-view naloži component, ki je dostopen na linku, ki mu ga pošlješ.-->
<router-view/>


<div id="app">
  <MainNavbar/>
  <router-view></router-view>
</div>
</template>

<script>
import MainNavbar from "./components/MainNavbar.vue";

export default {
  name: "App",
  components: {   MainNavbar
  },  
}
</script>

<style>
</style>
