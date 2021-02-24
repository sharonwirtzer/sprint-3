export default {
    props:['keep'],
    template:`
    <section class="keep-preview">
        <p>note: {{keep.note}}</p>
        <img :src="keep.thumbnail" /> 
        <p>price: {{keep.note}}</p>
        
    </section>
    `,

}
