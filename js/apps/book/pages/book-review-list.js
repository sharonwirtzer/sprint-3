// import reviewPreview from './review-preview.cmp.js';


export default {
    props: ['review'],
    template: `                                    
                <ul class="review-review-list">
                    <li v-for="review in reviews" :key="review.id" class="review-preview-container">
                    <p> type="text" placeholder="Full name" v-model="bookToReview.fullName">
                    <p> type="number" placeholder="rate" v-model.number="bookToReview.rate">
                    <p> type="date" placeholder="read At" v-model="bookToReview.readAt">
                    <p> type="text" placeholder="Textarea" v-model="bookToReview.Textarea">
                        <button @click="select(review)">Details</button>
                    </li>   
                </ul>
     `,
    methods: {
        select(review) {
            this.$emit('selected', review)
        },

    },
    // components: {
    //     reviewPreview
    // }
}