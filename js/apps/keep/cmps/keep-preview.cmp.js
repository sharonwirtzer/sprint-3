export default {
    props:['keep'],
    template:`
    <section class="keep-preview"  style="padding: 30px;" >
        <p> {{keep.title}}</p>
        <img :src="keep.thumbnail" /> 
        <p> {{keep.note}}</p>

     
        
    </section>
    `,
   data() {
        return {
              color: '#673AB7'
        }
    },
}


