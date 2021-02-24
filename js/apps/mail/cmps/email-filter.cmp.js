export default {
    template: `
    <section class="mail-filter">
        <label> Search a mail: </label>    
        <input ref="mailInput" type="text" @input="setFilter" placeholder="Search mail" v-model="filterBy.byRead">
        <form @submit.prevent="setFilter">
            <input type="text" placeholder="txt" v-model="filterBy.byTxt">
            <input type="number" placeholder="read/unread" v-model.number="filterBy.byRead">
        </form>
    </section>
    `,
    data() {
        return {
            filterBy: {
                byRead: false,
                byTxt: ''
            }
        }
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy)
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