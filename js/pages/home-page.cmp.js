export default {
    template: `
    <section class="home app-main">
        <h1>Home sweet home</h1>
        <nav>
           <router-link active-class="active-link" to="/" exact>Home</router-link> |
           <router-link to="/email">Email</router-link> |
           <router-link to="/keep">Keep</router-link> |
           <router-link to="/book">Books</router-link> |
           <router-link to="/about">About</router-link>

       </nav>
    </section>
    `
}