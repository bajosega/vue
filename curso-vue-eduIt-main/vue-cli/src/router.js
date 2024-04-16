import { createWebHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue'
import Bind from './views/Bind.vue'
import CustomDirectivas from './views/CustomDirectivas.vue'
import Directivas from './views/Directivas.vue'
import Interpolacion from './views/Interpolacion.vue'
import VModel from './views/VModel.vue'
import Eventos from './views/Eventos.vue'
import Login from './views/Autenticacion/Login.vue'
import Usuarios from './views/Usuarios/Usuarios.vue'


let usuario = {permisos:"home"};

const guard = (to ,from,next)=>{

    if(to.meta.requireAuth && !usuario){
        alert("NEcesita estar logeado")
        nextTick("VModel")
    }else if(usuario){
            if(to.meta.gate){
                if(usuarios.permisos===to.meta.gate) 
            next()
                else { next(bind)}
        }
    }
}



const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: '/',
            redirect: '/Home',
        },
        {
            path: '/Home',
            component: Home,
            name: 'Home',
           // meta:{ requireAuth :true},
           // beforeEnter: guard
            //beforeEnter: {requireAuth:true}
            
        },
        {
            path: '/Bind',
            component: Bind,
            name: 'Bind'
        },
        {
            path: '/CustomDirectivas',
            component: CustomDirectivas,
            name: 'CustomDirectivas'
        },
        {
            path: '/Directivas',
            component: Directivas,
            name: 'Directivas'
        },
        {
            path: '/Interpolacion',
            component: Interpolacion,
            name: 'Interpolacion'
        },
 
        {
            path: '/VModel',
            component: VModel,
            name: 'VModel'
        },

        {
            path: '/Eventos',
            component: Eventos,
            name: 'Eventos'
        },

        {
            path: '/Autenticacion/Login',
            component: Login,
            name: 'Login'
        },
        {
            path: '/usuarios',
            component: Usuarios,
            name: 'Usuarios'
        },

        
        
    ],
})

export default router;