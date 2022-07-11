<template>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bandsite</title>
</head>
<nav>
  <h1>this will be a navbar</h1>
</nav>
<body>
<p class=""> body bro</p>
 
  </body>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      followers: 0,
      /* create user object */
      user: {
        id: 1,
        userName: '_johndoe',
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        isAdmin: true,
            
      }
    }
  },
  
  
  methods: {
    /* get followers */
    Counter() {
      this.followers++
    }
  },
    mounted() {

  }
  
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
}
:root{
--height1: 70px; /* height of navbar */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav{
  height: var(--height1);
  background-color: #2c3e50;
  color: #fff;
  position: absolute;
  top: 0;
  width: 100%;
  padding-top: 20px;
}
body{
  background-color: #e1e1e1;
  color: #fff;
  height: 100vh;
  width: 100vw;

  align-items: center;
}
button{
  width: fit-content;
  padding: 1em;
font-size: 3em;
}
h1{
font-size: 1.5em;
}
</style>
