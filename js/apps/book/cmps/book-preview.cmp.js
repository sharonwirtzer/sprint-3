import { bookDetailsService } from '../services/bookDetails-service.js'

export default {
    props: ['book'],
    template: `
                <section >
                    <h1>Title: {{book.title}}</h1>
                    <p>Price: {{book.listPrice.amount}} {{getCurrencyIcon}}</p>
                    <img :src="book.thumbnail"/>
                 </section>
    `,
    computed: {
        getCurrencyIcon() {
            return bookDetailsService.getCurrencySymbol(this.book)
        }

    }
}