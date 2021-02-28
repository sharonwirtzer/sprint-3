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
            <email-filter @filtered="setFilter"/>
            <email-sort :emails="emailsToShow"></email-sort>
            <email-list :emails="emailsToShow" @remove="removeEmail" v-show="!isCompose"/> 
            <side-nav @openCompose="openCompose"></side-nav>
            <email-compose @close="closeCompose" @send="saveEmail" v-if="isCompose"  :email="email" :reply="false"></email-compose>
        </section>`,
    data() {
        return {
            emails: [],
            email: {
                id: '',
                from: 'Oded',
                subject: '',
                body: '',
                isRead: true,
                cc: '',
                sentAt: '',
                reciveAt: '',
                sendTo: '',
                isReply: false
            },
            isInbox: null,
            filterBy: null,
            isSentEmails: null,
            isCompose: null
        }
    },
    methods: {
        onCloseCompose() {
            this.isCompose = false;
            eventBus.$emit(DETAILS_PAGE_CLOSED, 'Details was closed');
            this.$router.push('/email');
        },
        saveEmail() {
            this.email.sentAt = Date.now();
            this.isCompose = false;
            emailService.save(this.email)
                .then(email => {
                    const msg = {
                            txt: 'email saved succesfully',
                            type: 'success'
                        }
                        // eventBus.$emit('show-msg', msg)
                        // this.$router.push('/email')
                })
                .catch(err => {
                    const msg = {
                            txt: 'Error, please try again later',
                            type: 'error'
                        }
                        // eventBus.$emit('show-msg', msg)
                })

        },
        openCompose() {
            this.isCompose = true;

        },

        closeCompose() {
            this.isCompose = false;

        },
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