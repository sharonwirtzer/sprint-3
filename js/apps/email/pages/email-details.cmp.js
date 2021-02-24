import longText from '../cmps/long-text.cmp.js'
// import { emailDetailsService } from '../services/emailDetails.service.js'

export default {
    props: ['email'],
    template: `<section class="email-details">
                    <h2>{{email.sendName}}</h2>
                    <p>{{email.subject}}</p>
                    <p>{{email.body}}</p>
              </section>`,

    computed: {

    },
    components: {
        longText,
        // emailDetailsService
    }

}