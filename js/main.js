// import appHeader from './cmps/app-header.cmp.js'
// import userMsg from './cmps/user-msg.cmp.js'
import { router } from './routes.js'


const options = {
    el: '#app',
    router,
    template: `
        <section>
            <user-msg />
            <app-header />
            <router-view /> <!--<book-app />-->
            <footer><p> &copy; Coffeerights 2021</p></footer>
        </section>
    `,
    components: {
        // appHeader,
        // userMsg
    }
}

const app = new Vue(options)