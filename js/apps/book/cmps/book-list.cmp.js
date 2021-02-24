import bookPreview from './book-preview.cmp.js';


export default {
    props: ['books'],
    template: `                                    
                <ul class="book-list">
                    <li v-for="book in books" :key="book.id" class="book-preview-container">
                        <book-preview :book="book"  @click.native="select(book)"></book-preview> 
                        <button @click="select(book)">Details</button>
                    </li>   
                </ul>
     `,
    methods: {
        select(book) {
            this.$emit('selected', book)
        },

    },
    components: {
        bookPreview
    }
}