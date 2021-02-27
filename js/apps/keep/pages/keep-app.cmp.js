
import { keepService } from '../services/keep-service.js'
import keepFilter from '../cmps/keep-filter.cmp.js'
import keepList from '../cmps/keep-list.cmp.js'
import keepEdit from '../pages/keep-edit.cmp.js'


export default {
    template: `
        <section class="keep app-main">
        <keep-filter @filtered="setFilter" />
         <keep-edit />
            <keep-list :keeps="keepsToShow" @remove="removekeep" @selected="selectkeep" />
        </section>
    `,
    data() {
        return {
            keeps: keepService.query(),
            selectedkeep: null,
            filterBy: null,
        }
    },
    methods: {
        removekeep(keepId) {
            keepService.remove(keepId)
        },
        selectkeep(keep) {
            this.selectedkeep = keep
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        keepsToShow() {
            if (!this.filterBy) return this.keeps
            const searchStr = this.filterBy.bytitle.toLowerCase()
            const keepsToShow = this.keeps.filter(keep => {
                return keep.title.toLowerCase().includes(searchStr)
            })
            return keepsToShow
        }
    },
    components: {
        keepFilter,
        keepList,
        keepEdit,

    }
}