export default {
    props: ['email'],
    template: `
    <section class="email-compose-container">
      
    </section>
    `,

    methods: {
        add(emailId) {
            //this section pass to details componenets!!!!!

            this.$emit('read', emailId); //father is email-app
        }

    },

}