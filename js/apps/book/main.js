import { bookService } from './services/book-service.js';
import bookApp from './pages/book-app.cmp.js';
import appHeader from './cmps/app-header.cmp.js';
import homePage from './pages/home-page.cmp.js';
import about from './pages/about.cmp.js';
// import bookReviewAdd from './cmps/review-add.cmp.js';



var books = bookService.query();

console.log('Books', books);

const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/about',
        component: about
    }

    // {
    //     path: '/book/review',
    //     component: bookReviewAdd
    // }

]

const myRouter = new VueRouter({ routes });


const options = {
    el: '#app',
    router: myRouter,
    template: `
            <section>
                <app-header></app-header>
                <router-view/>
                <footer><p>&copy: Cofferights 2021</p></footer>
            </section>
            `,
    components: {
        appHeader
    }
}

const app = new Vue(options);