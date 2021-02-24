export default {
    template: `
    
    <section class="keep-filter">
        <label> Search a keep: </label> 
        
        <input type="text" @input="setFilter" placeholder="Search" v-model="filterBy.bytitle">
    </section>
     </header>
    `,
    data() {
        return {
            filterBy: {
                bytitle: '',
            }
        }
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy)
        }
    }
}