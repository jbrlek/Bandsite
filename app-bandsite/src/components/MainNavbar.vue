<template>
<nav>
    <a href="#" class="bandlogo">Logo</a>
    <ul id="" class=''>
      <li><a href="vnosi.vue">Vnosi</a></li>
      <li><a href=".html">Prikazi</a></li>
      <li><a href=".html">placeholder</a></li>
    </ul>

</nav>
</template>

<script>
export default{
  name: "MainNavbar"
}

</script>

<style>
nav{
  height: var(--height1);
  background-color: rgb(49, 49, 49);
  color: #fff;
  position: fixed;
  top: 0;
  overflow: hidden;
  width: 100%;
  padding-top: 30px;
  z-index: 1;
}
ul{
  margin-top: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline;
}
ul li{margin-top: 10px;
  display: inline;
}
ul li a{
  padding: 1em 2em;
  color: #fff;
  text-decoration: none;
}
ul li a:hover{
  background-color: rgba(137, 136, 136, 0.801);
}

.bandlogo{
  position: absolute;
  top: 10px;
  left: 0;
  margin-left: 30px;
  z-index: -1;
  border-radius: 2em;
  width: 100px;
  background-color: darkgray;
  padding: 1em;
}

</style>