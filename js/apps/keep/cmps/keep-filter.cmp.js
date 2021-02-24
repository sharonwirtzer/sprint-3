export default {
    template: `
     <header class="app-header">
        <h1>keeps Shop</h1>
    <section class="keep-filter">
        <label> Search a keep: </label> 
        
        <input type="number" placeholder="min price" v-model.number="filterBy.fromPrice">
        <input type="number" placeholder="max price" v-model.number="filterBy.toPrice">


        <input type="text" @input="setFilter" placeholder="Search" v-model="filterBy.bytitle">
    </section>
     </header>
    `,
    data() {
        return {
            filterBy: {
                bytitle: '',
                fromPrice: 0,
                toPrice: Infinity
            }
        }
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy)
        }
    }
}