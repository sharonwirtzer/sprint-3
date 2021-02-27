import { keepService } from '../services/keep-service.js'

export default {

    template: `
   <section class="note-area">
        <form @submit.prevent="save">
            <input type="text" class="text-area" placeholder="Take a note..." v-model="keepToEdit.title" >
            <button title="New  list"><img src="img/10.png" height="30" width="30" /></button>
            <button title="New note with image"><img src="img/11.png" height="30" width="30" /></button>
            <button title="Save"><img src="img/8.png" height="30" width="30" /></button>
            <img src: previewImage class="uploading-image" />
              <div>
   </div>
              
        </form>
      </section>   
        
    `,
    data() {
        return {
            selectedFile: null,
            keepToEdit: keepService.getEmptykeep(),
        }
    },
    methods: {

        onfileSelected(event) {
            this.selectedFile = event.target.files[0]
        },

        save() {
            keepService.save(this.keepToEdit)
            this.keepToEdit = keepService.getEmptykeep()
        },
    }
}






