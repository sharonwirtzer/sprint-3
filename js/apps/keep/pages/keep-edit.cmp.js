import { keepService } from '../services/keep-service.js'

export default {
    template: `
   <section class="note-area">
        <form @submit.prevent="save">
            <input type="text"  placeholder="title" v-model="keepToEdit.title">
            <textarea rows="15" cols="30" name="comment" form="usrform" placeholder="Take a note..." v-model="keepToEdit.title"></textarea>
           
            <button >Save!</button>
            
        </form>
   </section>
    `,
    data() {
        return {
            keepToEdit: keepService.getEmptykeep(),
        }
    },
    methods: {
        save(){
            keepService.save(this.keepToEdit)
            this.keepToEdit = keepService.getEmptykeep()
        },

        }
      
    
}

