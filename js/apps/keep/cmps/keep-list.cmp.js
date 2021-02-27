import keepPreview from './keep-preview.cmp.js'


export default {
    props: ['keeps'],
    template: `
    <ul class="keep-list">
    
        <li v-for="keep in keeps" :key="keep.id" class="keep-preview-container" v-bind:style="{ backgroundColor: color}"> 
            <keep-preview  :keep="keep"  @click.native="logId(keep.id)"  />   
            <button  title="Delete" @click="remove(keep.id)"><img src="img/50.png" height="20" width="20" /></button>  
            <div class="color">
            <input type="color" v-model="color"/>
     </div>

    </div>


        </li>
    </ul>
    `,

    data() {
       
            return {
              color: '# rgb(245, 246, 247)'
            }
          
    },

    methods: {
        remove(keepId) {
            this.$emit('remove', keepId)
        },
        select(keep) {
            this.$emit('selected', keep)

        },
        logId(keepId) {
            console.log('Id is', keepId);
        }
    },


    components: {
        keepPreview,
    }

}
