import emailPreview from './email-preview.cmp.js'
debugger;
export default {
    props: ['emails'],
    template: `
    <ul class="email-list">
        <li v-for="email in emails" :key="email.id" class="email-preview-container" >
            <email-preview :email="email" @click.native="logId(email.id)" />
            <div class="btns-container">
                <button @click="remove(email.id)">X</button>
                <router-link :to="'/email/'+email.id">Details</router-link>
                <router-link :to="'/email/edit/'+email.id">Edit</router-link>
            </div>
        </li>
    </ul>
    `,
    methods: {
        remove(emailId) {
            this.$emit('remove', emailId)
        },
        logId(emailId) {
            console.log('Id is', emailId);
        }
    },
    components: {
        emailPreview
    }
}