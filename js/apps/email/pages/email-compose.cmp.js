import { emailService } from '../services/email.service.js'
// import { eventBus } from '../services/event-bus.service.js'
//<input type="text" placeholder="To" v-model="emailToAdd.to">
//   <input type="text" placeholder="Cc" v-model="emailToAdd.toCc" >
//     <input type="text" placeholder="body" v-model="emailToAdd.body">

//car-edit app-main  email-compose-form
export default {
    props: ['email', 'reply'],
    template: `
    <section v-if="email" class="email-compose-container">
                <input  placeholder="To:" type="text" v-model="email.to">
                <input  placeholder="Cc:" type="text" v-model="email.cc">
                <input  placeholder="Subject:" type="text" v-model="email.subject">
                <textarea  rows="30" cols="500" v-model="email.body"></textarea>
               
                <button v-on:click="close">Close</button>
                <button v-on:click="sent">Send</button>
           
            <!-- <user-msg></user-msg> -->
        </section>
    `,

    data() {
        return {
            emailToAdd: null
        }
    },

    methods: {
        add(emailId) {
            //this section pass to details componenets!!!!!

            this.$emit('read', emailId); //father is email-app
        },

        sent() {

            debugger;
            emailService.save(this.emailToAdd)
                .then(email => {
                    email.sentAt = Date.now();

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
        },
        close() {
            // if (this.email.to || this.email.cc || this.email.subject || email.body) this.$emit('draft', emailId);

            this.$emit('close');


        },

    },
    computed: {
        // title() {
        //     return this.emailId ? 'email Edit' : 'email Add'
        // },

        emailId() {
            return this.$route.params.emailId
        }
    },
    created() {

        if (this.emailId) emailService.getEmailById(this.emailId).then(email => this.emailToAdd = email)
        else this.emailToAdd = emailService.getEmptyEmail()

        if (this.reply) {
            this.email = {...this.email };
            this.email.body = '';
            this.email.to = this.email.from;
            this.email.subject = 'Re:' + this.email.subject;
        }

    },
    watch: {
        emailToAdd: {
            handler(val) {
                console.log('email Modified', val)
                    // TODO: Call the Validation Service
            },
            deep: true
        }
    }
}