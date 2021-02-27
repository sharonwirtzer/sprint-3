import { emailService } from '../services/email.service.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailList from '../cmps/email-list.cmp.js';
import emailCompose from './email-compose.cmp.js';
import emailPreview from '../cmps/email-preview.cmp.js';
import sideNav from '../cmps/side-nav.cmp.js';
import emailSort from '../cmps/email-sort.cmp.js';

export default {
    template: `
        <section class="email app-main">
            <email-filter @filtered="setFilter" @sorted="setSort" />
            <email-sort :emails="emailsToShow"></email-sort>
            <email-list :emails="emailsToShow" @remove="removeEmail"  @read="markEmailRead"/> 
            <side-nav></side-nav>
        </section>`,
    data() {
        return {
            emails: [],
            filterBy: null,

        }
    },
    methods: {
        loadEmails() {
            emailService.query()
                .then(emails => this.emails = emails);

        },
        removeEmail(emailId) {
            emailService.remove(emailId)
                .then(this.loadEmails);

        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },

        sortByDate(emails) {
            if (this.sortBy === 'Dates Ascending') {
                return emails.sort(function(a, b) {
                    return new Date(a.date) - new Date(b.date);
                });
            } else {
                return emails.sort(function(a, b) {
                    return new Date(b.date) - new Date(a.date);
                });
            }
        },

        markEmailRead(emailId) {
            emailService.getEmailById()
            this.isRead = true;

        },
    },
    computed: {
        emailsToShow() {
            if (!this.filterBy) return this.emails;
            var { byTxt } = this.filterBy;
            byTxt = byTxt.toLowerCase();
            var showenEmails = this.emails.filter(email => {
                return (email.body.toLowerCase().includes(byTxt)) ||
                    (email.subject.toLowerCase().includes(byTxt)) ||
                    (email.from.toLowerCase().includes(byTxt))
            })
            if (this.filterBy.byStatus === 'Unread') showenEmails = showenEmails.filter(email => !email.isRead);
            if (this.filterBy.byStatus === 'Read') showenEmails = showenEmails.filter(email => email.isRead);
            return showenEmails;
        },

    },
    created() {
        this.loadEmails()
    },
    components: {
        emailFilter,
        emailList,
        sideNav,
        emailCompose,
        emailPreview,
        emailSort
    }
}