<template>
    <main>
      <!--body-->
        <!--container for main background image -->
        <div class="bgimg">
          <h1 class="bandname">Kokosy</h1>
      </div>
      <!--band navigation - description, band members, released work-->
      <div> 
        <div class=bandnav>
          <!--navigation within band page: links to o nas, clani, nase delo-->
          <ul>
            <li><a href="#opis"> Kokosy</a></li>
            <li><a href="#clani">clani</a></li>
            <li><a href="#delo">delo</a></li>
          </ul>
        </div>
        <div id="opis">
          <h2>Description</h2>
          <p>Kokosy is a band.</p>
          <p></p>
        </div>
        <div id="clani">
          <H2>Members</H2>
          <table>
            <tr>
              <td>1</td>
            </tr>
            
            <tr>
              <td>1</td>
            </tr>
            
            <tr>
              <td>1</td>
            </tr>
          </table>
        </div>
        <div id="delo">
          <h2>Released Work</h2>
          
            <ul>
              <li>album 3</li>
              <li>album 2</li>
              <li>album 1</li>
            </ul>

          </div>
        </div>
      </main>
</template>

<script>
import MainNavbar from "./MainNavbar.vue";

export default {
  name: "Izpis",
  components: {MainNavbar
  },
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
:root{
--height1: 70px; /* height of navbar */
}
body{
background-color: rgb(66, 66, 66);
}

#logo{
  float: left;
  width: 100px;
  background-color: rgba(252, 215, 215, 0.122);
  margin: 0 auto;
  margin-top: 10px;
  margin-left: 30px;
  padding: 10px;
}
main{
  margin: auto;
  margin-top: var(--height1);
  padding-top: var(--height1);
  background-color: rgb(41, 40, 40);
  color: rgb(194, 194, 194);
  width: 100%;
  max-width: 1500px;
  height: fit-content;

  align-items: center;
}
.bgimg {
  background: linear-gradient(
    rgba(0, 0, 0, .2),
    rgba(0, 0, 0, .5)),
    url("assets/img/kokosy1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  padding: 1.5em;
  width: 100%;
  height: 500px;
 /* position: absolute;
  top: 0;
  left: 0;
  z-index: -1;*/
}
.bandname{
  position: relative;
  top: 80%;
  left: 10px;
  width: fit-content;
  font-size: 50px;
  font-weight: bold;
  color: rgb(154, 144, 144);
}
ul {
  list-style-type: none;
  padding: 0;
}
.bandnav{
  margin: auto;
  width: fit-content;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  position: fixed;
  top: 100px;
  left: 0;
}
.bandnav ul li{
 display: inline;
 margin-right: 3px;
}
.bandnav ul li a{
  padding: 1em 2em;
  background-color: rgba(136, 136, 136, 0.466);
  color: #fff;
  text-decoration: none;
}
.bandnav ul li a:hover{
  background-color: rgba(137, 136, 136, 0.801);
}
#opis,
#clani,
#delo{
  margin-top: var(--height1);
  padding-bottom:1500px;
  display:block;
}
table{
  width: 100%;
}
tr{
  height: 50px;
  background-color: rgb(136, 135, 135);
}
tr:nth-child(odd)
{
  background-color: rgb(49, 49, 49);
}s

button{
  width: fit-content;
  padding: 1em;
font-size: 3em;
}
h1{
font-size: 1.5em;
}

</style>
