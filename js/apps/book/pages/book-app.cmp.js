import { bookService } from '../services/book-service.js';
import bookList from '../cmps/book-list.cmp.js';
import bookDetails from '../pages/book-details.cmp.js';
import bookFilter from '../cmps/book-filter.cmp.js';




export default {
    template: `<section class="book app-main">
                <book-filter  v-if="!selectedBook" @filtered="setFilter" />
                <book-list    v-if="!selectedBook" :books="booksToShow" @selected="selectBook" />
                <book-details v-else :book="selectedBook" @close="selectedBook=null" /> 
              
             </section>
                    `,

    data() {
        return {
            books: null,
            selectedBook: null,
            filterBy: null,
        };
    },
    methods: {
        selectBook(book) {
            this.selectedBook = book;
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },

        addEmptyArr() {

            for (let i = 0; i < this.books.length; i++) {
                debugger
                const element = array[i];
                var emptyArr = [];
                element['emptyArr'] = emptyArr;
            }
            debugger
            // this.books.forEach(element => {
            //     var emptyArr = [];
            //     element['emptyArr'] = emptyArr;
            // });
            console.log('books:::::', this.books);
            // return this.books

        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            var { byName } = this.filterBy
            byName = byName.toLowerCase();
            const booksToShow = this.books.filter(({ title, listPrice }) => {
                return (title.toLowerCase().includes(byName)) && (listPrice.amount > this.filterBy.fromPrice) && (listPrice.amount < this.filterBy.toPrice)
            })
            return booksToShow;
        },
    },
    created() {
        // this.books = bookService.query();
        bookService.query()
            .then(books => this.books = books)
            // .then(this.ddEmptyArr)
            // .then(books => this.books = books)

        // this.addEmptyArr();
    },
    components: {
        bookList,
        bookDetails,
        bookFilter
    },
};