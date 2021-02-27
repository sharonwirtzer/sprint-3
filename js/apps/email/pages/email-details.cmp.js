import emailCompose from '../pages/email-compose.cmp.js';
import { emailService } from '../services/email.service.js';
import { utilService } from "../../../services/util.service.js";

// <router-link to="/email/add" v-if="isReply" v-on:close="closeReply" v-on:send="sendReply" :email="email" :reply="true"></router-link>

// <email-compose v-if="isReply" v-on:close="closeReply" v-on:send="sendReply" :email="email" :reply="true"></email-compose>


// <router-link to="/email/add" v-if="isReply" v-on:close="closeReply" v-on:send="sendReply" :email="email" :reply="true">

/* <button  v-on:click="replyEmail">Replay!!!!</button>
</router-link> */
//  <router-link to="/email/add" v-if="isReply" v-on:close="closeReply" v-on:send="sendReply" :email="email" :reply="true"  tag="button">
//  Click me  
// </router-link> 
//  <p>{{email.isRead}}</p>
//  debugger;
// 

export default {
    //  props: ['email'],
    template: `<section v-if="email" class="email-details">
                     <div v-show="!isReply" class=" column">
                        <h1>Subject: {{email.subject}}</h1>
                        <!--  <h5>{{getTimeToShow}}</h5> -->
                        <div class="reply">
                                                  <button v-on:click="replyEmail"  title="reply"> <img src="img/reply.png" height="30" width="30" /></button> 
                            <router-link to="/email" tag="button" title="back"> <img src="img/back.png" height="30" width="30" /></router-link>  
                            </div> 
                            <div class="flex spcae-between">     
                               <img src="img/user.png" height="50" width="50"  />
                               <h5>{{email.from}}</h5>
                             <h5 >{{getTimeToShow}}  </h5>                     
                        </div> 
                        <p>{{email.body}}</p> 
                        <div class="flex">
                        
                        </div> 
                     </div>
                    <email-compose :email="email" v-if="isReply" v-on:close="closeReply" v-on:send="sendReply" :reply="true"></email-compose>               
    </section>`,








    computed: {
        getTimeToShow() {
            return utilService.foramatDate(this.email.sentAt);

        },

    },
    data() {
        return {
            email: null,
            isReply: false
            // nextCarId: 'vXmNp'

        }
    },
    methods: {
        sendReply(emailReply) {
            debugger
            emailReply.sentAt = Date.now();
            emailService.save(emailReply)
                .then(email => {
                    console.log('Saved email:', email);
                    const msg = {
                        txt: 'email saved succesfully',
                        type: 'success'
                    }

                    // this.email = send;
                    // eventBus.$emit('show-msg', msg)

                    this.$router.push('/email')
                })
                .catch(err => {
                    console.log(err);
                    const msg = {
                        txt: 'Error, please try again later',
                        type: 'error'
                    }
                    // eventBus.$emit('show-msg', msg)
                })

            //      debugger;
            //      email.isRead = true;

            //      email.sentAt = Date.now();
            //      emailService.addEmail(email)
            //          .then((res) => {

            //              eventBus.$emit(DETAILS_PAGE_CLOSED, 'Details was closed');
            //              this.isReply = false;
            //              this.$router.push('/email');
            //          }).catch((res) => {

            //          });
        },

        closeReply() {

            // console.log('closeReply');
            eventBus.$emit(DETAILS_PAGE_CLOSED, 'Details was closed');
            this.isReply = false;
            this.$router.push('/email');
        },
        replyEmail() {
            //  debugger

            this.isReply = true;
        },
        // markEmailAsRead(emailId) {
        //     emailService.getEmailById(emailId)
        //         .then(email => {
        //             this.email = email;
        //             this.email.isRead = true;
        //         })
        // }
        save() {
            emailService.save(this.emailToAdd)
                .then(email => {

                    console.log('Saved email:', email);
                    const msg = {
                        txt: 'email saved succesfully',
                        type: 'success'
                    }


                    // this.email = send;
                    // eventBus.$emit('show-msg', msg)

                    this.$router.push('/email');
                })
                .catch(err => {
                    console.log(err);
                    const msg = {
                        txt: 'Error, please try again later',
                        type: 'error'
                    }
                    // eventBus.$emit('show-msg', msg)
                })
        },
        loademail() {

            const id = this.$route.params.emailId
            emailService.getEmailById(id)
                .then(email => {

                    this.email = email
                    // this.nextEmailId = emailService.getNextEmailId(email.id)
                    this.email.isRead = true;
                    //  this.save(); ///ask inbar 
                    console.log('this.email.isRead?????????details roe 86', this.email.isRead)
                })

        }
    },
    created() {

        this.loademail();
    },
    components: {
        emailService,
        //  eventBus,
        emailCompose

    },
    watch: {
        '$route.params.emailId'(id) {
            console.log('Changed to', id);
            this.loademail();
        }
    }

}