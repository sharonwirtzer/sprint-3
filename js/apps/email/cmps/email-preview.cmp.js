export default {
    props: ['email'],
    template: `
    <section class="email-preview">
        <input class="select-email" type="checkbox"/>
        <p class="email-sender">{{email.sendName}}</p>
        
    
    </section>
    `,

}


/* <h2>{{email.sendName}}</h2>
<p>{{email.subject}}</p> */