import vnosi from "./components/vnosi.vue";
import izpis from "./components/izpis.vue";
import {createRouter, createWebHistory} from "vue-router";


/*  To so poti, po katerih se lahko premikas znotraj aplikacije. 
    Ko želiš pot na novo stran, moraš dodati pot na to novo stran.*/ 
const routes=[
    {      
      name:'Home', 
      component:Home,
      path:'/', 
  },  
  {      
      name:'vnosi', 
      component:vnosi,
      path:'/vnosi', 
  },
  {
    name:'izpis', 
    component:izpis,
    path:'/izpis', 
}
];

const route = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
});

export default router
