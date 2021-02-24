export default {
    props:['keep'],
    template:`
    <section class="keep-preview">
        <p>title: {{keep.title}}</p>
        <img :src="keep.thumbnail" /> 
        <p>note: {{keep.note}}</p>
        
    </section>
    `,

}
