<template>
    <Layout>
        <iframe :src="mapURL" style="width: 100%; height: 100%;"/>
    </Layout>
</template>

<script>
    export default {
        data: () => ({
            mapURL: 'https://www.damerousky.cz/'
        }),
        created() {
            let params = (new URL(document.location)).searchParams
            let id = params.get('id');
            if (id != null) {
                this.mapURL = 'https://www.damerousky.cz/' + id;
            }
        }
    }
</script>