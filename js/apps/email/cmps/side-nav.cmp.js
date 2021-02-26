import emailList from '../cmps/email-list.cmp.js';
import { emailService } from '../services/email.service.js';

/**
 * <router-link to="/email/add">+Compose</router-link>
            <button :class="classObjectCompose" @click="onComposeClicked">Compose</button>
            <button :class="classObjectInbox" @click="onInboxClicked">Inbox</button>
            <button :class="classObjectSent" @click="onSentClicked">Sent</button>
 */

// <router-link to="/email" tag="button">Back</router-link> 
//    <button>Inbox</button>

/* <router-link class="btn-sent" tag="button" :to="'/email/#/' + 'sent'" exact>
<span>send</span>
</router-link> */



export default {
    template: `
    <section class="side-nav">
            <router-link to="/email/add" tag="button">+Compose</router-link>
            <router-link to="/email/inbox" tag="button">Inbox</router-link>
            <router-link to="/email/sent" tag="button">Sent</router-link>                   
    </section>
    `
}
//<router-link to="/email/add">+Compose</router-link>