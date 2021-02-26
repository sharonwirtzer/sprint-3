export default {
    props: ['emails'], //to do coping? inbar??
    template: `
    <section class="email-sort">
        <div>
            <select @change="emailsSort" v-model="sortBy">
                <option value="Dates Decending">Dates Decending</option>
                <option value="Dates Ascending">Dates Ascending</option>
                <option value="Titles Decending">Titles Decending</option>
                <option value="Titles Ascending">Titles Ascending</option>
            </select>               
         </div>
       
    </section>

    `,
    data() {
        return {
            sortBy: 'Dates Decending'
        }
    },
    methods: {
        emailsSort() {
            if ((this.sortBy === 'Titles Ascending') || (this.sortBy === 'Titles Decending')) this.emails.sort(this.sortByTxt());
            else this.emails.sort(this.sortByDate());
        },
        sortByTxt() {
            var diff = (this.sortBy === 'Titles Ascending') ? 1 : -1;
            return this.emails.sort(function(a, b) {
                var emailA = a.subject.toLowerCase(),
                    emailB = b.subject.toLowerCase();
                return (emailA > emailB) ? 1 * diff : -1 * diff;

            });

        },
        sortByDate() {
            if (this.sortBy === 'Dates Ascending') {
                return this.emails.sort(function(a, b) {
                    return new Date(a.sentAt) - new Date(b.sentAt);
                });
            } else {
                return this.emails.sort(function(a, b) {
                    return new Date(b.sentAt) - new Date(a.sentAt);
                });
            }
        }

    },
    created() {
        this.sortBy = 'Dates Decending';
        this.sortByDate();
        // this.emails.sort(this.sortCreatedAt);
    },

}