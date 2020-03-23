<template>
    <v-app>
        <v-app-bar color="primary" app>
            <!--<v-app-bar-nav-icon></v-app-bar-nav-icon>-->
            <v-btn href="/mapa" text>
                <v-toolbar-title>DámeRoušky.cz</v-toolbar-title>
            </v-btn>
            <v-toolbar-items>
                <v-btn href="/mapa" text>Mapa</v-btn>
                <v-btn href="/vytvorit-misto" text>Nové místo</v-btn>
                <v-btn href="/ziskat-rousku" text>Získat roušku</v-btn>
<!--                <v-btn text>Přeprava</v-btn>-->
                <v-btn href="/english-info" text>EN</v-btn>
                <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn text append="" v-on="on">Rozcestník</v-btn>
                    </template>
                    <v-list>
                        <v-list-item link href="/pro-seniory">
                            <v-list-item-content>
                                <v-list-item-title>Informace pro seniory</v-list-item-title>
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
                        <v-list-item link href="/faq">
                            <v-list-item-content>
                                <v-list-item-title>Časté dotazy (a odpovědi)</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item link href="/web-a-data">
                            <v-list-item-content>
                                <v-list-item-title>O webu a vašich datech</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
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
            <span class="caption">© 2020 <a href="https://cesko.digital" class="black--text">Česko.Digital</a> a přispěvatelé. Pro mapu používáme službu <a href="https://www.mapotic.com/" title="Mapotic – vytváření komunitních map"><img src="https://www.mapotic.com/assets/img/mapotic-big-font.svg" id="mapotic" alt="Mapotic.com" /></a>. Děkujeme!</span>
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

    #mapotic {
        position: relative;
        top: 2px;
        height: 13px;
        width: auto;
    }
</style>
