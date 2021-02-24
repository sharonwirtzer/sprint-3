export default {
    props: ['email'],
    template: `
    <section class="email-preview">
        <h2>{{email.sendName}}</h2>
        <p>{{email.subject}}</p>
    </section>
    `,

}