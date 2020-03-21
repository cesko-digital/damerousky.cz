<template>
    <v-app>
        <v-app-bar color="primary" app>
            <!--<v-app-bar-nav-icon></v-app-bar-nav-icon>-->
            <v-btn href="/mapa" text>
                <v-toolbar-title>DámeRoušky.cz</v-toolbar-title>
            </v-btn>
            <v-toolbar-items>
                <v-btn href="/mapa" text>Mapa roušek</v-btn>
                <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn text append="" v-on="on">Informace</v-btn>
                    </template>
                    <v-list>
                        <v-list-item link href="/vytvorit-misto">
                            <v-list-item-content>
                                <v-list-item-title>Jak vytvořit nové místo</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item link href="/najit-mista">
                            <v-list-item-content>
                                <v-list-item-title>Jak najít nejbližší místa s rouškou</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item link href="/ziskat-rousku">
                            <v-list-item-content>
                                <v-list-item-title>Jak získám roušku?</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item link href="/vyroba-a-pece">
                            <v-list-item-content>
                                <v-list-item-title>Jak vyrobit roušku a jak se o ni starat?</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item link href="/nesiju">
                            <v-list-item-content>
                                <v-list-item-title>Jak pomoci, když nešiju?</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item link href="/opravy-sicich-stroju">
                            <v-list-item-content>
                                <v-list-item-title>Opravy šicích strojů</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item link href="/pro-seniory">
                            <v-list-item-content>
                                <v-list-item-title>Informace pro seniory</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item link href="/faq">
                            <v-list-item-content>
                                <v-list-item-title>Časté dotazy (a odpovědi)</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item link href="/english-info">
                            <v-list-item-content>
                                <v-list-item-title>Basic information in English</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item link href="/web-a-data">
                            <v-list-item-content>
                                <v-list-item-title>O webu a vašich datech</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
<!--
                        <v-list-item link href="/o-nas">
                            <v-list-item-content>
                                <v-list-item-title>O nás</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
-->
                    </v-list>
                </v-menu>
            </v-toolbar-items>
        </v-app-bar>
        <!--
        <v-navigation-drawer clipped app>
        </v-navigation-drawer>
        -->
        <v-content>
            <slot/>
        </v-content>
        <v-footer color="primary" app>
            <span class="caption">© 2020 <a href="https://cesko.digital" class="black--text">Česko.Digital</a> a přispěvatelé</span>
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

<style>
    .v-application .container a {
        color: #FF6F00 !important;
    }
</style>