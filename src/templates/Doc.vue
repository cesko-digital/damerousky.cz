<template>
    <Layout>
        <v-container>
        <h1>
            {{ $page.doc.title }}
        </h1>
        <div class="markdown" v-html="$page.doc.content"/>
        </v-container>
    </Layout>
</template>

<page-query>
    query Doc ($path: String!) {
    doc: doc (path: $path) {
    path
    content
    }
    }
</page-query>

<script>
    export default {
        metaInfo() {
            return {
                title: this.$page.doc.title,
                meta: [
                    {key: 'description', name: 'description', content: this.$page.doc.description}
                ]
            }
        }
    }
</script>