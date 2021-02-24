export default {
    props: ['email'],
    template: `
    <section class="email-preview">
            <p>{{email.subject}}<p/>  
            <p>{{showSentAt}}</p>
            <p>{{email.sendName}} <p/> 
            <span v-on:click="toggleStarMark"  v-bind:class="setClassName">☆</span>
            <input type="checkbox" />
    </section>
    `,
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
            return this.isDark ? 'star-fill' : 'star-un-fill';
        },
        showSentAt() {

            // convert unix timestamp to milliseconds
            var tsMs = this.email.sentAt * 1000;
            // initialize new Date object
            var date = new Date(tsMs);

            var hours = ("0" + date.getHours()).slice(-2);

            var minutes = ("0" + date.getMinutes()).slice(-2);

            return hours + ":" + minutes;
        }
    }

}




/*     <div class="email-preview-container">   </div>  <h2>{{email.sendName}}</h2>   <p>{{email.subject}}</p>   <p>{{email.id}}</p>*/