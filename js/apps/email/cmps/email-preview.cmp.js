export default {
    props: ['email'],
    template: `
    <section>
        <div class="email-preview-container">
            <p>{{email.id}}</p>
            <p>Name of sender<p/>   
            
            <input type="checkbox" />
        </div>
       
        
    </section>
    `,

}

/* <h2>{{email.sendName}}</h2>   <p>{{email.subject}}</p> */