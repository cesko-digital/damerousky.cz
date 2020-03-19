<template>
    <v-app>
        <v-app-bar color="primary" dark app>
            <v-tabs align-with-title>
                <v-tabs-slider></v-tabs-slider>
                <v-tab to="/">DámeRoušky.cz</v-tab>
                <v-tab to="/mapa">Mapa</v-tab>
                <v-tab to="/najit-mista">Jak najít nejbližší místa s rouškou</v-tab>
                <v-tab to="/vytvorit-misto">Jak vytvořit nové místo</v-tab>
                <v-tab to="/pro-seniory">Informace pro seniory</v-tab>
                <v-tab to="/faq">Časté dotazy (a odpovědi)</v-tab>
                <v-tab to="/o-nas">O nás</v-tab>
            </v-tabs>
        </v-app-bar>

        <v-content>
            <v-container>
                <slot/>
            </v-container>
        </v-content>
        <v-footer color="primary" dark app>
            <span class="caption">© 2020 <a href="https://cesko.digital" class="white--text">Česko.Digital</a></span>
        </v-footer>
    </v-app>
</template>

<static-query>
    query {
    metadata {
    siteName
    }
    }
</static-query>