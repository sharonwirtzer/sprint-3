import homePage from './pages/home-page.cmp.js';
import emailApp from './apps/email/pages/email-app.cmp.js';
import emailDetails from './apps/email/pages/email-details.cmp.js';
import emailList from './apps/email/cmps/email-list.cmp.js';
import emailAdd from './apps/email/pages/email-compose.cmp.js';
import keepApp from './apps/keep/pages/keep-app.cmp.js';
import about from './pages/about.cmp.js';
import bookApp from './apps/book/pages/book-app.cmp.js';


const routes = [{
    path: '/',
    component: homePage,
},
{

    path: '/email',
    component: emailApp
},
{
    path: '/email/add/',
    component: emailAdd
},
{
    path: '/email/:emailId',
    component: emailDetails
},
{
    path: '/email/inbox',
    component: emailList
},
{
    path: '/email/sent',
    component: emailList
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
    component: bookApp
},

]

export const router = new VueRouter({
    routes
})