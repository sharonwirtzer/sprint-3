/*Gets emails from service (asyc) */


import { emailService } from '../services/email.service.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailList from '../cmps/email-list.cmp.js';
import emailCompose from '../cmps/email-compose.cmp.js';
import emailPreview from '../cmps/email-preview.cmp.js';

export default {

    // <router-link to="/mail/edit">Add a new email!</router-link>

    template: `
        <section class="email app-main">
            <email-filter @filtered="setFilter" />
            <email-compose/>
            <email-list :mails="emailsToShow" @remove="removeEmail" />
            <email-preview/>
        </section>
    `,
    data() {
        return {
            emails: [],
            filterBy: null
        }
    },
    methods: {
        loadEmails() {
            emailService.query()
                .then(emails => this.mails = emails)
        },
        removeEmail(emailId) {
            emailService.remove(emailId)
                .then(this.loadEmails)
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        emailsToShow() {
            if (!this.filterBy) return this.emails;
            var { byTxt } = this.filterBy;
            byTxt = byTxt.toLowerCase();
            const emailsToShow = this.emails.filter(({ title, list }) => {
                return (title.toLowerCase().includes(byTxt))
                    //need to add filter by read/unread
            })
            return emailsToShow;
        }
    },
    created() {
        this.loadEmails()
    },
    components: {
        emailFilter,
        emailList,
        emailCompose,
        emailPreview
    }
}