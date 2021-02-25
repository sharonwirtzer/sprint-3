/*Gets emails from service (asyc) */

import { emailService } from '../services/email.service.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailList from '../cmps/email-list.cmp.js';
import emailCompose from '../pages/email-compose.cmp.js';
import emailPreview from '../cmps/email-preview.cmp.js';
import sideNav from '../cmps/side-nav.cmp.js';

// import emailStatus from '../cmps/email-status.cmp.js';



export default {
    //   <email-preview/>
    // <router-link to="/mail/edit">Add a new email!</router-link>
    // <email-e/> ===>  <router-link to="/email/edit">Add a new email!</router-link>????
    //<router-link to="/email/add">+Compose</router-link> ===> in side-nav

    template: `
            <section class="email app-main">
                <email-filter @filtered="setFilter" @sorted="setSort" />
                <email-list :emails="emailsToShow" @remove="removeEmail"  @read="markEmailRead"/> 
                <side-nav></side-nav>
            </section>`,
    data() {

        return {

            emails: [],
            filterBy: null,
            sortBy: ''
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
        setSort(sortBy) {
            this.sortBy = sortBy;
        },
        emailsSort(emails) {
            var sortEmails = [];
            if ((this.sortBy === 'Titles Ascending') || (this.sortBy === 'Titles Decending')) sortEmails = sortByTxt(emails);
            else sortEmails = sortByDate(emails);
        },
        sortByTxt(emails) {
            var diff = (this.sortBy === 'Titles Ascending') ? 1 : -1;
            return emails.sort(function(a, b) {
                var emailA = a.title.toLowerCase(),
                    emailB = b.title.toLowerCase();
                return (emailA > emailB) ? 1 * diff : -1 * diff;

            });
            //  return 0; //default return value (no sorting)
        },

        sortByDate(emails) {
            if (this.sortBy === 'Dates Ascending') {
                return emails.sort(function(a, b) {
                    return new Date(a.date) - new Date(b.date);
                    // return a.price - b.price;
                });
            } else {
                return emails.sort(function(a, b) {
                    return new Date(b.date) - new Date(a.date);
                    // return b.price - a.price;
                });
            }
        },

        markEmailRead(emailId) { //to turn to emailService for that????? inbar

            // emailService.markRead(emailId)
            //     .then(this.loadEmails);

            // emailService.markRead(emailId);
            // this.loadEmails;


            // if (this.emails[emailId].isRead) return; //
            // this.emails[emailId].isRead = true; //To check if this component can access to this variable..

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
                    (email.sendName.toLowerCase().includes(byTxt))
            })
            if (this.filterBy.byStatus === 'Unread') showenEmails = showenEmails.filter(email => !email.isRead);
            if (this.filterBy.byStatus === 'Read') showenEmails = showenEmails.filter(email => email.isRead);

            // debugger
            // var sortEmails = []; ///to do the sort in service???= לא צריך בשלב זה
            // if ((this.sortBy === 'Titles Ascending') || (this.sortBy === 'Titles Decending')) sortEmails = sortByTxt(showenEmails);
            // else sortEmails = sortByDate(showenEmails);
            // // emailsSort(emailsToShow);
            // return showenEmails;
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

        // emailStatus
    }
}