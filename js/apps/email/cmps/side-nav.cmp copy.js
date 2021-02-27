export default {
    props: ['unreadEmails'],
    template: `
    <section class="side-nav">
            <router-link   to="/email/add">+Compose</router-link>
            <router-link class="btn-inbox" tag="button" to="/email/inbox" exact>
                    <i class="material-icons">Inbox</i><span class="unread-emails">{{unreadEmails}}</span>       
                </router-link>
            <button>Inbox</button>
            <button>Sent Mail</button>
                          
    </section>

    `
}