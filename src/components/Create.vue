<template>
    <div id="create">
        <br>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">User Create</div>
                    <div class="card-body">
                        <form action="" method="">
                            <div class="form-group row">
                                <label for="first_name" class="col-md-4 col-form-label text-md-right">First Name</label>
                                <div class="col-md-6">
                                    <input type="text" id="first_name" class="form-control" name="first_name" required="" autofocus="">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="last_name" class="col-md-4 col-form-label text-md-right">Last Name</label>
                                <div class="col-md-6">
                                    <input type="text" id="last_name" class="form-control" name="last_name" required="" autofocus="">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input type="password" id="password" class="form-control" name="password" required="">
                                </div>
                            </div>

                            <div class="col-md-6 offset-md-4">
                                <button type="button" class="btn btn-primary" @click="save">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {
        async save($event) {
            alert("Success!..You have added a new user and now redirecting to the user list!")
            this.$router.push({name:'list'});
        }
    }
}
</script>
