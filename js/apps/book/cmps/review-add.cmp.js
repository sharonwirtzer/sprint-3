import { bookService } from '../services/book-service.js';

export default {
    template: `
    <section class="book-review">
        <h3>book review</h3>
        <form @submit.prevent="save">
            <input type="text" placeholder="Full name" v-model="bookToReview.fullName">
            <input type="number" placeholder="rate" v-model.number="bookToReview.rate">
            <input type="date" placeholder="read At" v-model="bookToReview.readAt">
            <input type="text" placeholder="Textarea" v-model="bookToReview.Textarea">
            <button>Save!</button>
        </form>
   </section>
    `,
    data() {
        return {
            bookToReview: bookService.getEmptyRevForm()
        }
    },
    methods: {
        save() {
            return;
        }
    }
}