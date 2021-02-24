import emailPreview from './email-preview.cmp.js'

export default {
    props: ['mails'],
    template: `
    <ul class="mail-list">
        <li v-for="mail in emails" :key="mail.id" class="mail-preview-container" >
            <mail-preview :mail="mail" @click.native="logId(mail.id)" />
            <div class="btns-container">
                <button @click="remove(mail.id)">X</button>
                <router-link :to="'/mail/'+mail.id">Details</router-link>
                <router-link :to="'/mail/edit/'+mail.id">Edit</router-link>
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