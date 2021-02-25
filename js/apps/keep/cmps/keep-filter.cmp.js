export default {
    template: `
         <input type="text" class="keep-filter" @input="setFilter" placeholder="Search" v-model="filterBy.bytitle">
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
