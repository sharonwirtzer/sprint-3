// import longText from '../cmps/long-text.cmp.js'
// import { emailDetailsService } from '../services/emailDetails.service.js'
import { emailService } from '../services/email.service.js';
//


export default {
    // props: ['email'],
    template: `<section v-if="email" class="email-details">
                    <h1>{{email.subject}}</h1>
                    <h5>{{email.sendName}}</h5> 
                    <p>{{email.body}}</p> 
                    <p>{{email.isRead}}</p> 
                  
              </section>`,

    computed: {

    },
    data() {
        return {
            email: null,
            nextCarId: 'vXmNp'

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
                    this.nextEmailId = emailService.getnextEmailId(email.id)
                        // this.email.isRead = true;
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