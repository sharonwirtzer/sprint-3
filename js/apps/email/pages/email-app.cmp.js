/*Gets emails from service (asyc) */


import { emailService } from '../services/email.service.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailList from '../cmps/email-list.cmp.js';
import emailCompose from '../cmps/email-compose.cmp.js';
import emailPreview from '../cmps/email-preview.cmp.js';
// import emailStatus from '../cmps/email-status.cmp.js';



export default {
    //   <email-preview/>
    // <router-link to="/mail/edit">Add a new email!</router-link>

    template: `
            <section class="email app-main">
                <email-filter @filtered="setFilter" />
                <email-compose/>
                <email-list :emails="emailsToShow" @remove="removeEmail"  @read="markEmailRead"/> 
            </section>`,
    data() {
        return {
            emails: [],
            filterBy: null
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
        markEmailRead(emailId) { //to turn to emailService for that????? inbar

            // emailService.markRead(emailId)
            //     .then(this.loadEmails);

            // emailService.markRead(emailId);
            // this.loadEmails;


            // if (this.emails[emailId].isRead) return; //
            // this.emails[emailId].isRead = true; //To check if this component can access to this variable..

        }
    },
    computed: {
        emailsToShow() {

            if (!this.filterBy) return this.emails;

            var { byTxt } = this.filterBy;

            byTxt = byTxt.toLowerCase();
            var emailsToShow = this.emails.filter(email => {
                return (email.body.toLowerCase().includes(byTxt)) ||
                    (email.subject.toLowerCase().includes(byTxt)) ||
                    (email.sendName.toLowerCase().includes(byTxt))

            })


            if (this.filterBy.byStatus === 'Unread') emailsToShow = emailsToShow.filter(email => !email.isRead);
            // else emailsToShow = emailsToShow.filter(email => email.isRead);
            if (this.filterBy.byStatus === 'Read') emailsToShow = emailsToShow.filter(email => email.isRead);
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
        // emailStatus
    }
}