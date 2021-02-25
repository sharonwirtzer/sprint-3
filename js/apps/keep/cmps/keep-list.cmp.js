import keepPreview from './keep-preview.cmp.js'


export default {
    props: ['keeps'],
    template: `
    <ul class="keep-list">


    
        <li v-for="keep in keeps" :key="keep.id" class="keep-preview-container" >
            <keep-preview  :keep="keep"  @click.native="logId(keep.id)"  />
          
                <button @click="remove(keep.id)">X</button>




                <div class="color">
  <input type="text" v-bind:style="{ color: color}" v-model="color" maxlength="7" placeholder="#000000"/>
  <input type="color" v-model="color"/>
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

