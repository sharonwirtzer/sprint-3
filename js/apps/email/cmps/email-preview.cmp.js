import { utilService } from "../../../services/util.service.js"; //inbar??

export default {
    //<section class="email-preview" :class="email.isRead? 'bold' : 'unBold'"><p>{{email.isRead}}</p>   <p>{{email.id}}</p>
    props: ['email'],
    template: `
        <section class="email-preview" :class="setClassReadUnRead">
            <input type="checkbox" />
            <span v-on:click="toggleStarMark" :class="setClassName">☆</span>
            <p>From:{{email.from}}</p> 
            <p>{{email.subject}}</p>
            <p>{{getBodyTxtToShow}}</p> 
            <p>{{getTimeToShow}}</p>
            <p>To:{{email.sendTo}}</p> 
            <p>is read?:{{email.isRead}}</p>
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
            return utilService.foramatDate(this.email.sentAt);

        },
        setClassName() {
            //find another name???
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