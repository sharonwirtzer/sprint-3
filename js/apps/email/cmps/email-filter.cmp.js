export default {
    //     <form @submit.prevent="setFilter">
    //     <input type="text" placeholder="txt" v-model="filterBy.byTxt">
    //     <input type="number" placeholder="read/unread" v-model.number="filterBy.byRead">
    // </form>


    template: `
    <section class="email-filter">
        <div>
            <label> Search a mail: </label>    
            <input ref="mailInput" type="text" @input="setFilter" placeholder="Search mail" v-model="filterBy.byTxt">
        </div >
        <div >
            <select @change="setFilter" v-model="filterBy.byStatus">
                <option value="All">All</option>
                <option value="Read">Read</option>
                <option value="Unread">Unread</option>
            </select>               
        </div>
        <div >
            <select @change="setSort" v-model="sortBy">
                <option value="Dates Decending">Dates Decending</option>
                <option value="Dates Ascending">Dates Ascending</option>
                <option value="Titles Decending">Titles Decending</option>
                <option value="Titles Ascending">Titles Ascending</option>
            </select>               
         </div>
       
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
        setSort() {
            this.$emit('sorted', this.sortBy);
        }
    },
    created() {
        console.log('created');
    },
    mounted() {
        console.log('mounted');
        this.$refs.mailInput.focus()
    }
}