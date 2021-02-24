export default {
    template: `
     <header class="app-header">
        <h1>notes</h1>
    <section class="keep-filter">
        <label> Search a note: </label> 
        
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