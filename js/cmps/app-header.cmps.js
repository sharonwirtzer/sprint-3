export default {
    template: `
    <header class="app-header">
        <router-link class="logo" to="/" exact>Appsus</router-link>

        <nav>
           <router-link to="/email">Email</router-link> |
           <router-link to="/keep">Keep  </router-link> |
           <router-link to="/book">Books</router-link> 

       </nav>
    </header>
    `,

}