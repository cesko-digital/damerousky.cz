<template></template>

<script>
    export default {
        metaInfo() {
            return {
                title: `Přesměrování na to ${this.$page.redirect.target}`,
                meta: [
                    {'http-equiv': 'refresh', content: `0; URL=${this.$page.redirect.target}`}
                ]
            }
        }
    }
</script>

<page-query>
    query Redirect ($id: ID!) {
    redirect: redirect (id: $id) {
    target
    }
    }
</page-query>