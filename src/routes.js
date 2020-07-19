import Vue from 'vue'
import Router from 'vue-router'
import blogs from './components/blogs'


Vue.use(Router)

export default new Router({
   routes:[
       {
           path: '/blogs',
           name: 'blogs',
           component: blogs
       }
   ]
  })

  
