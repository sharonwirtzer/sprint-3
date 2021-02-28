export default {
    template: `
    <section class="side-nav">
 
        <button class="side-nav1"  @click="openCompose">Compose <img src="img/plus.png" height="30" width="30" /></button>
        <button  @click="openInbox" >Inbox <img src="img/sent.png" height="20" width="20" /></button>
        <button @click="openSentEmails">Sent <img src="img/inbox.png" height="20" width="20" /></button>
     
    </section>
    `,
    data() {
        return {};
    },
    methods: {
        openCompose() {
            this.$emit('openCompose');
        },
        openInbox() {
            this.$emit('openInbox');
        },
        openSentEmails() {
            this.$emit('openSentEmails');
        },

        // setClassToInbox() {

        //     this.$emit('setClassToInbox');
        // },
        // setClassToSentEmails() {

        //     this.$emit('setClassToSentEmails');
        // }
    },

    computed: {

        // setClassToInbox() {
        //    
        //     this.$emit('setClassToInbox');
        // },
        // setClassToSentEmails() {
        //     
        //     this.$emit('setClassToSentEmails');
        // }


    },

}