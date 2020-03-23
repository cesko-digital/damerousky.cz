<template>
    <Layout>
        <iframe style="overflow: hidden; width: 100%; height: 100%;" allow="geolocation *; camera *;" frameborder="0" :src="mapURL"></iframe>
    </Layout>
</template>

<script>
    const baseMapURL = 'https://www.mapotic.com/rouskyven/';

    export default {
        data: () => ({
            mapURL: baseMapURL
        }),
        async mounted() {
            let params = (new URL(document.location)).searchParams
            let id = params.get('id');
            if (id != null) {
                this.mapURL = baseMapURL + id;
            }
            let user = params.get('user');
            if (user != null) {
                this.mapURL = baseMapURL + 'user/' + user;
            }
            let places = params.get('places');
            if (places != null) {
                params.delete('places')
                this.mapURL = baseMapURL + 'places?' + params.toString();
            }
        }
    }
</script>
