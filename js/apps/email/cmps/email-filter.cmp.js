export default {
    template: `
    <section class="email-filter"  >
        <input ref="emailInput"   class="email-search"  type="text" @input="setFilter" placeholder="Search mail" v-model="filterBy.byTxt">
        <select @change="setFilter" v-model="filterBy.byStatus">
            <option value="All">All</option>
            <option value="Read">Read</option>
            <option value="Unread">Unread</option>
        </select>                  
    </section>
    `,
    data() {
        return {
            filterBy: {
                byStatus: 'All',
                byTxt: ''
            },
            sortBy: 'Dates Decending'
        }
    },
    methods: {
        setFilter() {
            this.$emit('filtered', {...this.filterBy });
        },
        // setSort() {
        //     this.$emit('sorted', this.sortBy);
        // }
    },
    created() {
        console.log('created');
    },
    mounted() {
        console.log('mounted');
        this.$refs.emailInput.focus();
    }
}