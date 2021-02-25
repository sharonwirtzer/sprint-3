export default {
    //     <form @submit.prevent="setFilter">
    //     <input type="text" placeholder="txt" v-model="filterBy.byTxt">
    //     <input type="number" placeholder="read/unread" v-model.number="filterBy.byRead">
    // </form>


    template: `
    <section class="mail-filter">
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
            <select @change="setSort" v-model="SortBy.byType">
                <option value="byTitle">By Title</option>
                <option value="byDate">By Date</option>
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
            SortBy: ''
        }
    },
    methods: {
        setFilter() {
            this.$emit('filtered', {...this.filterBy }); //used to make a copy, cuz the son cant change
        },
        setSort() {
            this.$emit('sorted', SortBy); //used to make a copy, cuz the son cant change
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