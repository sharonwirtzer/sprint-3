// import longText from '../cmps/long-text.cmp.js'
// import { emailDetailsService } from '../services/emailDetails.service.js'
import { emailService } from '../services/email.service.js';
//


export default {
    // props: ['email'],
    template: `<section class="email-details">
                    <h1>  in details!  </h1> 
                    <h2>{{email.sendName}}</h2> 
                    <p>{{email.subject}}</p>
                    <p>{{email.body}}</p> 
                    <p>{{email.isRead}}</p> 
                  
              </section>`,

    computed: {

    },
    data() {
        return {
            email: null

        }
    },
    methods: {
        // markEmailAsRead(emailId) {
        //     emailService.getById(emailId)
        //         .then(email => {
        //             this.email = email;
        //             this.email.isRead = true;
        //         })
        // }
        loademail() {
            const id = this.$route.params.emailId
            emailService.getById(id)
                .then(email => {
                    this.email = email
                    this.nextemailId = emailService.getNextemailId(email.id) //???
                    this.email.isRead = true;
                })

        }
    },
    created() {
        // debugger
        // console.log('in details page');
        // const emailId = this.$route.params.emailId; //extract the email id from the url
        // this.markEmailAsRead(emailId);
        this.loademail();
    },
    components: {
        // longText,
        // emailDetailsService
    },
    watch: {
        '$route.params.emailId' (id) {
            console.log('Changed to', id);
            this.loademail();
        }
    }

}