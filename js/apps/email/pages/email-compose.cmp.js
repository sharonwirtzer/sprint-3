import { emailService } from '../services/email.service.js'
// import { eventBus } from '../services/event-bus.service.js'
//<input type="text" placeholder="To" v-model="emailToAdd.to">
//   <input type="text" placeholder="Cc" v-model="emailToAdd.toCc" >
//     <input type="text" placeholder="body" v-model="emailToAdd.body">

//car-edit app-main  email-compose-form
export default {
    props: ['email'],
    template: `
    <section v-if="emailToAdd" class="email-compose-container ">
        <h3>New Message</h3>
        <form @submit.prevent="save">
            <input type="text" placeholder="To" >
            <input type="text" placeholder="Cc" >
            <input type="text" placeholder="Subject" v-model="emailToAdd.subject">
            <textarea cols="30" rows="10" v-model="emailToAdd.body"></textarea>
            <button>Send</button>
        </form>
      
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


        save() {
            emailService.save(this.emailToAdd)
                .then(email => {
                    console.log('Saved email:', email);
                    const msg = {
                        txt: 'email saved succesfully',
                        type: 'success'
                    }
                    this.email = send;
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
        }
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
        if (this.emailId) {
            emailService.getById(this.emailId).then(email => this.emailToAdd = email)
        } else {
            this.emailToAdd = emailService.getEmptyEmail()
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