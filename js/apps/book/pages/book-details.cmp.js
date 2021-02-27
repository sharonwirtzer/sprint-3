import { bookDetailsService } from '../services/bookDetails-service.js';
import longText from '../cmps/long-text.cmp.js';
import bookReviewAdd from '../cmps/review-add.cmp.js';



export default {
    props: ['book'],
    template: `<section class="book-details">
                    <button class="btn-close-details" @click="$emit('close')">X</button>
                    <p>Title: {{book.title}}</p>
                    <p>Subtitle: {{book.subtitle}}</p>
                    <p class="book-category-list">
                        Category: 
                        <span  v-for="category in book.categories">{{category}} </span>
                    </p>
                    <p class="authors-list" v-for="(author,idx) in book.authors" :key="idx">Authors: {{author}}</p>
                    <p>Published at: {{book.publishedDate}}</p>
                    <p>Language: {{book.language}}</p>
                    <p>{{readingDuration}}</p>
                    <p>{{setTxtpublishedDate}}</p>
                    <p :class="setClassName">Price: {{book.listPrice.amount}}{{getCurrencyIcon}}</p>
                    <p class="on-sale" v-if="book.listPrice.isOnSale">ON-SALE!</p>
                    <long-text :txt="book.description" />
                    <img :src="book.thumbnail" />

                    <review-add/>
                 
                 
                    
                   
            </section>
            `,

    computed: {
        readingDuration() {
            if (this.book.pageCount > 500) return 'Long reading';
            if (this.book.pageCount > 200) return 'Decent reading';
            if (this.book.pageCount < 100) return 'Light reading';
        },
        setTxtpublishedDate() {
            if ((new Date().getFullYear() - this.book.publishedDate) > 10) return 'Veteran Book';
            if ((new Date().getFullYear() - this.book.publishedDate) < 1) return 'New!';
        },

        setClassName() {
            return { red: this.book.listPrice.amount > 150, green: this.book.listPrice.amount < 20 }
        },
        getCurrencyIcon() {
            return bookDetailsService.getCurrencySymbol(this.book)
        }

    },
    components: {
        longText,
        bookReviewAdd
    }
}