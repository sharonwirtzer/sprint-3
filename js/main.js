 import appHeader from './cmps/app-header.cmps.js'
import { router } from './routes.js'


const options = {
    el: '#app',
    router,
    template: `
        <section>
            <app-header /> 
            <router-view /> 
            <footer><p> &copy; Coffeerights 2021</p></footer>
        </section>
    `,
    components: {
         appHeader,
        
    }
}

const app = new Vue(options)