export default {
    props: ['keep'],
    template: `
    <section class="keep-preview"  style="padding: 10px;"  >
        <p> {{keep.title}}</p>
        <img :src="keep.img" >
        <p> {{keep.note}}</p>
    </section>
    `,

}