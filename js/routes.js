
import homePage from './pages/home-page.cmp.js';
import emailApp from './apps/mail/pages/email-app.cmp.js';
 import keepApp from './apps/keep/pages/keep-app.cmp.js';
import about from './pages/about.cmp.js';
import book from './apps/book/pages/book-app.cmp.js';

const routes = [{
        path: '/',
        component: homePage,
    },
    {
        path: '/email',
        component: emailApp
    },
    {
         path: '/keep',
        component: keepApp
     },
     {
        path: '/about',
        component: about
    },
  
    {
        path: '/book',
        component: book
    },
]

export const router = new VueRouter({
    routes
})