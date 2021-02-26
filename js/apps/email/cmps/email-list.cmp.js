import emailPreview from './email-preview.cmp.js';
import emailStatus from '../cmps/email-status.cmp.js';
//@click.native="logId(email.id)" was on <email-preview> component

/* <section>  
        <email-status :emails="emails"></email-status>
        <div class="email-list-container" v-for="email in emails" :key="email.id">
            <router-link class="email-preview-container" :to="'/email/'+email.id" >
                <email-preview :email="email"  @click.native="markEmailAsRead(email.id)"/>
            </router-link >
           
            <button @click="remove(email.id)">X</button>
           
        </div>
    </section>` */


export default {
    // props: ['emails', 'folder'],
    props: ['emails', 'folder'],
    template: `
    <section>  
        <email-status :emails="emails"></email-status>
        <div class="email-list-container" v-for="email in emailsToShow" :key="email.id">
            <router-link class="email-preview-container" :to="'/email/'+email.id" >
                <email-preview :email="email"  @click.native="markEmailAsRead(email.id)"/>
            </router-link >
           
            <button @click="remove(email.id)">X</button>
           
        </div>
    </section>`,




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
        markEmailAsRead(emailId) {
            //this section pass to details componenets!!!!!
            // debugger;
            this.$emit('read', emailId); //father is email-app
        }
    },
    computed: {
        emailToShow() {


            if (folder === 'sent') {
                this.emails.map()




            }
            // if(this.emails.sentAt)







            return emailsToShow;




        }
    },

    created() {

        console.log('email-list: ', this.emails);
        console.log('folder:', this.folder)
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