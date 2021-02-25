import emailPreview from './email-preview.cmp.js';
import emailStatus from '../cmps/email-status.cmp.js';
//@click.native="logId(email.id)" was on <email-preview> component

export default {
    props: ['emails'],
    template: `
    <section>  

        <email-status :emails="emails"></email-status>

        <div class="email-list-container" v-for="email in emails" :key="email.id">
            <router-link class="email-preview-container"   :to="'/email/'+email.id" >
                <email-preview :email="email"  @click.native="markEmailAsRead2(email.id)"/>
            </router-link >
            <div>
                <button @click="remove(email.id)">X</button>
            </div>
        </div>
    </section>

    `

    // ` last backup
    // <section>  

    //     <email-status :emails="emails"></email-status>

    //     <div class="email-list" >
    //         <router-link class="email-preview-container" v-for="email in emails" :key="email.id"  :to="'/email/'+email.id" >
    //             <email-preview :email="email"  @click.native="markEmailAsRead2(email.id)"/>
    //             <button @click="remove(email.id)">X</button>
    //         </router-link >
    //     </div>
    // </section>

    // `

    // template: `
    // <section>  
    //     <email-status :emails="emails"></email-status>
    //     <ul class="email-list" >
    //         <li v-for="email in emails" :key="email.id" class="email-preview-container">
    //             <email-preview :email="email"  @click.native="markEmailAsRead(email.id)"/>
    //             <button @click="remove(email.id)">X</button>
    //         </li>
    //     </ul>
    // </section>

    // `,
    ,

    methods: {

        remove(emailId) {
            this.$emit('remove', emailId)
        },
        logId(emailId) {
            console.log('Id is', emailId);
        },
        // counteUnReadEmail() {
        //     this.unReadEmailCount++;
        // },
        markEmailAsRead2(emailId) {
            //this section pass to details componenets!!!!!

            this.$emit('read', emailId); //father is email-app
        }
    },
    created() {

        console.log('email-list: ', this.emails);
    },

    components: {
        emailPreview,
        emailStatus
    }
}


/* these will be in <div class="btns-container">
<button @click="remove(email.id)">X</button>
<router-link :to="'/email/'+email.id">Details</router-link>
<router-link :to="'/email/edit/'+email.id">Edit</router-link>
</div> */