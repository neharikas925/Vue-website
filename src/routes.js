import Vue from 'vue'
import Router from 'vue-router'
import blogs from './components/blogs'
import Home from './components/Home'


Vue.use(Router)

export default new Router({
   routes:[
       {
           path: '/blogs',
           name: 'blogs',
           component: blogs
       },
        {
           path: '/',
           name: '',
           component: Home
       }
   ]
  })

  
