import emailCompose from '../pages/email-compose.cmp.js';
import { emailService } from '../services/email.service.js';
import { utilService } from "../../../services/util.service.js";

export default {
    template: `
        <section v-if="email" class="email-details">
            <img class= "user" src="img/user.png" height="50" width="50"/>
            <div class="column" v-show="!isReply" >
                <h1>Subject: {{email.subject}}</h1>
                <div class="reply">
                    <button title="reply" v-on:click="replyEmail"> <img src="img/reply.png" height="30" width="30" /></button> 
                    <router-link to="/email" tag="button" title="back"> <img src="img/back.png" height="30" width="30" /></router-link>  
                </div> 
                <div class="flex spcae-between">     
                    
                    <h5>From:{{email.from}}</h5>
                   
                    <h5>Cc:{{email.cc}}</h5>
                    <h5>{{getTimeToShow}}</h5>                     
               
                <p>{{email.body}}</p> 
                </div> 
            </div>
            <email-compose :reply="true" :email="email" v-if="isReply" v-on:close="closeReply" v-on:send="sendReply"></email-compose>               
    </section>`,

    data() {
        return {
            email: null,
            isReply: false
        }
    },
    computed: {
        getTimeToShow() {
            let time;
            if (this.email.reciveAt) time = this.email.reciveAt;
            if (this.email.sentAt) time = this.email.sentAt;
            return utilService.foramatDate(time);
        },
    },
    methods: {
        sendReply(emailReply) {
            emailReply.sentAt = Date.now();
            emailReply.isReply = true;
            emailService.save(emailReply)
                .then(email => {
                    console.log('Saved email:', email);
                    const msg = {
                        txt: 'email saved succesfully',
                        type: 'success'
                    }

                    this.$router.push('/email')
                })
                .catch(err => {
                    console.log(err);
                    const msg = {
                        txt: 'Error, please try again later',
                        type: 'error'
                    }
                })
        },

        closeReply() {
            eventBus.$emit(DETAILS_PAGE_CLOSED, 'Details was closed');
            this.$router.push('/email');
        },
        replyEmail() {
            this.isReply = true;
        },

        loadEmail() {
            const id = this.$route.params.emailId
            emailService.getEmailById(id)
                .then(email => {

                    this.email = email
                    this.email.isRead = true;
                    console.log('this.email.isRead?????????details roe 86', this.email.isRead)
                })

        }
    },
    created() {
        this.loadEmail();
    },
    components: {
        emailService,
        emailCompose

    },
    watch: {
        '$route.params.emailId' (id) {
            console.log('Changed to', id);
            this.loadEmail();
        }
    }

}