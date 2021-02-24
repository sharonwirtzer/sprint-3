export default {
    props: ['email'],
    template: `<section class="email-preview" :class="email.isRead? 'bold' : 'unBold'">
                    <p>{{email.id}}</p>
                    <p>{{timeToShow}}</p>
                    <p>{{email.subject}}<p/>  
                    <p>{{email.sendName}} <p/> 
                    <span v-on:click="toggleStarMark" :class="setClassName">☆</span>
                    <input type="checkbox" />
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
        setClassName() {
            //find another name???
            return this.isStarMark ? 'star-fill' : 'star-un-fill';
        },


        timeToShow() {
            // Create a new JavaScript Date object based on the timestamp
            // multiplied by 1000 so that the argument is in milliseconds, not seconds.
            var tsMs = this.email.sentAt * 1000;

            var date = new Date(tsMs);


            var hours = ("0" + date.getHours()).slice(-2);

            var minutes = ("0" + date.getMinutes()).slice(-2);

            return hours + ":" + minutes;

        }

    }
}