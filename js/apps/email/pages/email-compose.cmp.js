import { emailService } from '../services/email.service.js'
export default {
    props: ['email', 'reply'],
    template: `
    <section v-if="email" class="email-compose-container">
                <input  placeholder="To:" type="text" v-model="email.sendTo">
                <input  placeholder="Cc:" type="text" v-model="email.cc">
                <input  placeholder="Subject:" type="text" v-model="email.subject">
                <textarea  rows="30" cols="500" v-model="email.body"></textarea>
               
                <button v-on:click="close">Close</button>
                <button v-on:click="sent">Send</button>
           
        </section>
    `,

    data() {
        return {
            emailToAdd: null

        }
    },

    methods: {
        add(emailId) {

            this.$emit('read', emailId);
        },

        sent() {
            this.$emit('send', { ...this.email });

        },
        close() {

            this.$emit('close');


        },

    },
    computed: {

        emailId() {
            return this.$route.params.emailId
        }
    },
    created() {

        if (this.reply) {

            this.emailToAdd = { ...this.email };
            this.emailToAdd.body = '';
            this.emailToAdd.sendTo = this.email.from;
            this.emailToAdd.from = this.email.sendTo;
            this.emailToAdd.subject = 'Re:' + this.email.subject;
        }

    },
    watch: {
        emailToAdd: {
            handler(val) {
                console.log('email Modified', val)
            },
            deep: true
        }
    }
}