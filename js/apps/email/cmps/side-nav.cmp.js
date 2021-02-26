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
            <router-link to="/email/add" tag="button"><img src="img/plus.png" height="20" width="20" /> Compose</router-link>
            <router-link to="/email/inbox"  tag="button"><img src="img/inbox.png" height="20" width="20" /> Inbox</router-link>
            <router-link to="/email/sent"  tag="button"><img src="img/sent.png" height="20" width="20" /> Sent</router-link>                   
    </section>
    `
}
//<router-link to="/email/add">+Compose</router-link>