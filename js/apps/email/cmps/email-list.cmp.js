import emailPreview from './email-preview.cmp.js';
import emailStatus from '../cmps/email-status.cmp.js';

export default {
    props: ['emails'],
    template: `
    <section>  
        <email-status :emails="emails"></email-status>
        <div  class="email-list-container" v-for="email in emails" :key="email.id">
            <router-link class="email-preview-container" :to="'/email/'+email.id">
                <email-preview :email="email"  @click.native="markEmailAsRead(email.id)"/>
            </router-link >
            <button @click="remove(email.id)"><img src="img/50.png" height="15" width="15"/></button>
        </div>
    </section>`,

    methods: {
        remove(emailId) {
            this.$emit('remove', emailId);
        },
        logId(emailId) {

        },
        markEmailAsRead(emailId) {

            this.$emit('read', emailId);
        }
    },
    components: {
        emailPreview,
        emailStatus
    }
}