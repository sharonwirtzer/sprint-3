export default {
    template: `
    <section class="side-nav">
        <button class="side-nav1" v-on:click="sent">Compose <img src="img/plus.png" height="30" width="30" /></button>
        <button @click=" sentAt ? one() : two()">Inbox <img src="img/sent.png" height="20" width="20" /></button>
        <button @click=" reciveAt ? two() : one()">Sent <img src="img/inbox.png" height="20" width="20" /></button>
     
    </section>
    `,
 
    computed:{
        one() {
            console.log('one');

        },
        two() {
            console.log('two');

        }

        
    },
  
}
