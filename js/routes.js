// import bookApp from './pages/book-app.cmp.js'
import homePage from './pages/home-page.cmp.js';
import emailApp from './apps/mail/pages/email-app.cmp.js';
// import keepApp from './apps/keep/pages/keep-app.cmp.js';
// import emailApp from './apps/keep/
// import bookEdit from './pages/book-edit.cmp.js'
// import bookDetails from './pages/book-details.cmp.js'
import about from './pages/about.cmp.js';

const routes = [{
        path: '/',
        component: homePage,
    },
    {
        path: '/email',
        component: emailApp
    },
    // {
    //     path: '/keep',
    //     component: keepApp
    // },
    // {
    //     path: '/book/edit/:bookId?',
    //     component: bookEdit
    // },
    // {
    //     path: '/book/:bookId',
    //     component: bookDetails
    // },
    {
        path: '/about',
        component: about
    },
]

export const router = new VueRouter({
    routes
})