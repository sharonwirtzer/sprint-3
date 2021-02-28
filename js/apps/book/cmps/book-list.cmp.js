import bookPreview from './book-preview.cmp.js'
import { eventBus } from "../services/event-bus-service.js"


export default {
    props: ['books'],
    template: `
    <ul class="book-list">
        <li v-for="book in books" :key="book.id" class="book-preview-container" >
            <book-preview :book="book" @click.native="logId(book.id)" />
            <div class="btns-container">
                <button @click="remove(book.id)"><img src="img/50.png" height="20" width="20" /></button>
            </div>
        </li>
    </ul>
    `,
    methods: {
        logId(bookId) {
            const msg = {
                txt: `You pressed the ${bookId} book`,
                type: 'success'
            }
            eventBus.$emit('show-msg', msg)
        },
        remove(bookId) {
            this.$emit('remove', bookId)
        },
        select(book) {
            this.$emit('selected', book)
        },
    },
    components: {
        bookPreview
    }
}