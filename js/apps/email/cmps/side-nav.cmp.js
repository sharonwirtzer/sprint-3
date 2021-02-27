import emailList from '../cmps/email-list.cmp.js';
import { emailService } from '../services/email.service.js';

/*    <section class="side-nav">
            <router-link to="/email/add" tag="button">+Compose</router-link>
            <router-link to="/email/inbox" :folder="inbox" tag="button">Inbox</router-link>
            <router-link to="/email/sent" :folder="sent" tag="button">Sent</router-link>                   
    </section>                  

 */
export default {

    template: `
    <section class="side-nav">
            <router-link  class="side-nav1"  to="/email/add" tag="button"> Compose  <img src="img/plus.png" height="30" width="30" /></router-link>
            <router-link to="/email/inbox"  tag="button"> Inbox   <img src="img/inbox.png" height="20" width="20" /></router-link>
            <router-link to="/email/sent"  tag="button">Sent  <img src="img/sent.png" height="20" width="20" /> </router-link>                   
    </section>
    `
}
//<router-link to="/email/add">+Compose</router-link>