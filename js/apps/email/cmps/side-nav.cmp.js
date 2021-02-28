export default {
    template: `
    <section class="side-nav">
 
        <button class="side-nav1"  @click="openCompose">Compose <img src="img/plus.png" height="30" width="30" /></button>
        <button>Inbox <img src="img/sent.png" height="20" width="20" /></button>
        <button>Sent <img src="img/inbox.png" height="20" width="20" /></button>
     
    </section>
    `,
    data() {
        return {};
    },
    methods: {
        openCompose() {
            this.$emit('openCompose');
        },


    },

    computed: {


    },

}