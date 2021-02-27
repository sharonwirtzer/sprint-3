import appHeader from './cmps/app-header.cmps.js'
import { router } from './routes.js'

const options = {
    el: '#app',
    router,
    template: `
        <section>
            <app-header /> 
            <router-view /> 
            <footer><p> Let's be Friends. <a href="#" class="fa fa-facebook"></a> <a href="#" class="fa fa-linkedin"></a> </p></footer>
        </section>
    `,
    components: {
        appHeader,

    }
}

const app = new Vue(options)