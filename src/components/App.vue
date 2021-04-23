<template>

    <div id="app">
        <noscript>
            <strong
            >We're sorry but this component doesn't work properly without JavaScript
                enabled. Please enable it to continue.</strong
            >
        </noscript>
        <h1>{{title}}</h1>
        <div>
            <button class="btn btn-primary test-button" @click="switchRoute('list')">List</button>
            <button class="btn btn-success" @click="switchRoute('create')">Create</button>
            <br>
            <router-view/>
        </div>
    </div>
</template>
<script>
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

export default {
    name: 'App',
    props: {
        title: {
            type: String,
            required: true,
            default:'This is custom component'
        },

    },
    data() {
        return {
            activeTab: '',
        }
    },
    created() {
        this.activeTab = this.$route.name
    },
    methods: {
        switchRoute(route) {
            this.$router.push({name: route})
        }
    },
    watch: {
        '$route.name'() {
            this.activeTab = this.$route.name
        }
    }
}
</script>
<style lang="scss">
    @import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
