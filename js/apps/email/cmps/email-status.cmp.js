export default {

    props: ['emails'],
    template: `
        <section>
            <span>You got {{getUnReadCount}} unread emails</span>
        </section>`,

    computed: {
        getUnReadCount() {
            console.log('emails in status:', this.emails)
            return this.emails.filter(email => !email.isRead).length;
            // this.unreadEmailsCount = this.emails.filter(email => !email.isRead).length;

        }
    },

    // created() {
    //     console.log('emails in status:', this.emails)

    // }
}