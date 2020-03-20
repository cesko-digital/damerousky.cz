// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, {router, appOptions, head, isClient}) {
    head.htmlAttrs = {lang: 'cs'}

    head.link.push({
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
    })

    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
    });

    Vue.use(Vuetify)

    appOptions.vuetify = new Vuetify({
        theme: {
            themes: {
                light: {
                    primary: '#FFDA57',
                    secondary: colors.amber.lighten4,
                    accent: colors.indigo.base,
                },
            },
        }
    });

    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
}
