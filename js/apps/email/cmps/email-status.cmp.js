export default {
    props: ['emails'],
    template: `
        <section  class="emails-sort" v-if="emails">
            <span>You got {{getUnReadCount}} unread emails</span>
        </section>`,

    computed: {
        getUnReadCount() {
            console.log('emails in status:', this.emails)
            return this.emails.filter(email => !email.isRead).length;
        }
    },

}