import { keepService } from '../services/keep-service.js'

export default {
    template: `
   <section class="keep-edit">
        <h3>Take a note...</h3>
        <form @submit.prevent="save">
            <input type="text" placeholder="title" v-model="keepToEdit.title">
            <input type="text" placeholder="note" v-model="keepToEdit.title">
            <button>Save!</button>
        </form>
   </section>
    `,
    data() {
        return {
            keepToEdit: keepService.getEmptykeep()
        }
    },
    methods: {
        save(){
            keepService.save(this.keepToEdit)
            this.keepToEdit = keepService.getEmptykeep()
        }
    }
}