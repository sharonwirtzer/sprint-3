import { utilService } from "../../../services/util.service.js"; //inbar??

export default {
    props: ['email'],
    template: `
        <section class="email-preview" :class="setClassReadUnRead">
            <p>From: {{email.from}}</p> 
            <p>{{email.subject}}</p>
            <p>{{getBodyTxtToShow}}</p> 
            <p>{{getTimeToShow}}</p>
        </section>`,

    data() {
        return {
            isStarMark: false
        }
    },
    methods: {
        toggleStarMark() {
            this.isStarMark = !this.isStarMark;
        },

    },
    computed: {
        getTimeToShow() {
            let time;
            if (this.email.reciveAt) time = this.email.reciveAt;
            if (this.email.sentAt) time = this.email.sentAt;
            return utilService.foramatDate(time);
        },
        setClassName() {
            return this.isStarMark ? 'star-fill' : 'star-un-fill';
        },

        setClassReadUnRead() {
            if (!this.email.isRead) return 'bold'
            else return 'unBold';
        },
        getBodyTxtToShow() {
            const SIZE = 15;
            const strToShow = this.email.body.length <= SIZE ? this.email.body : `${ this.email.body.substr(0, SIZE-1)}...`
            return strToShow
        },

    }
}