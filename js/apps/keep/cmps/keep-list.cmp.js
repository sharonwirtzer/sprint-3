import keepPreview from './keep-preview.cmp.js'


export default {
    props: ['keeps'],
    template: `
    <ul class="keep-list">
    
        <li v-for="keep in keeps" :key="keep.id" class="keep-preview-container"  >
            <keep-preview  :keep="keep"  @click.native="logId(keep.id)"  />
          
           

                <div class="color">
               <input  type="color" v-model="color" />       
                   <button  title="Delete" @click="remove(keep.id)"><img src="img/50.png" height="30" width="30" /></button>  
          <!--  <input type="text" v-bind:style="{ color: color}" v-model="color" maxlength="7" placeholder="#000000"/> -->
         
    </div>


        </li>
    </ul>
    `,
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
        keepPreview
    }

}