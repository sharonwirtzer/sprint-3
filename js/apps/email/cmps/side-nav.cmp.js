export default {
    template: `
    <section class="side-nav">
        <router-link  class="side-nav1"  to="/email/add" tag="button" @click.native="openCompose()">Compose<img src="img/plus.png" height="30" width="30" /></router-link>
        <router-link to="/email/inbox"  tag="button"> Inbox<img src="img/inbox.png" height="20" width="20" /></router-link>
        <router-link to="/email/sent"  tag="button">Sent  <img src="img/sent.png" height="20" width="20" /> </router-link>                   
    </section>
    `,
    method: {
        openCompose() {
            this.$emit('openCompose');
        }

    }
}