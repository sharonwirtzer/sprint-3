import longText from '../cmps/long-text.cmp.js'

export default {
    props: ['keep'],
    template: `
    <section class="keep-details">
        <p>title : {{keep.title }} </p>
        <p> price : {{keep.listPrice.amount}} {{keep.listPrice.currencyCode}}</p>
        <button @click="$emit('close')">X</button>
        <p class="title">{{keep.title}}</p>
            <p class="subtitle">{{keep.subtitle}}</p>
            <p class="category">Category: <span  v-for="category in keep.categories"> {{category}} </span></p>
            <p class="author" v-for="(author,idx) in keep.authors" :key="idx">Authors: {{author}}</p>
            <p class="date">Published at: {{keep.publishedDate}}</p>
            <p class="language">Language: {{keep.language}}</p>

            <long-text :txt="keep.description" />
            <div class="center-details">
                <img :src="keep.thumbnail" />
                <p class="reading-duration">{{readingDuration}}</p>
                <p>{{keepCondition}}</p>
                <p :class="priceColor">Price: {{keep.listPrice.amount}}{{getCurrencyIcon}}</p>
                <p class="on-sale" v-if="keep.listPrice.isOnSale">ON-SALE!</p>
                <button @click="$emit('close')">Close</button>

    </section>
    `,

    
}

