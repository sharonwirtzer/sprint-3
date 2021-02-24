import emailPreview from './email-preview.cmp.js'
//@click.native="logId(email.id)" was on <email-preview> component

export default {
    props: ['emails'],
    template: `
    <section>
        <div>
            <span>unread email: {{unReadEmailCount}}</span>
        </div>
        <ul class="email-list" >
            <li v-for="email in emails" :key="email.id" class="email-preview-container">
                <email-preview :email="email"  @click.native="markEmailAsRead(email.id)"/>
                <button @click="remove(email.id)">X</button>
            </li>
        </ul>
    </section>
 
    
    `,
    data() {
        return {
            unReadEmailCount: 0
        }
    },
    methods: {
        remove(emailId) {
            this.$emit('remove', emailId)
        },
        logId(emailId) {
            console.log('Id is', emailId);
        },
        counteUnReadEmail() {
            this.unReadEmailCount++;
        },
        markEmailAsRead(emailId) {
            debugger
            this.$emit('read', emailId); //father is email-app
        }
    },
    created() {
        console.log('email-list: ', this.emails);
    },

    components: {
        emailPreview
    }
}


/* these will be in <div class="btns-container">
<button @click="remove(email.id)">X</button>
<router-link :to="'/email/'+email.id">Details</router-link>
<router-link :to="'/email/edit/'+email.id">Edit</router-link>
</div> */