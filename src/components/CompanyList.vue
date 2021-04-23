<template>

    <div id="list">
        <br>
        <div class="row">
            <div class="col-md-12">
                <h3>Vue Custom Component (01)</h3>
                <div class="card">
                    <div class="card-header">Company List</div>
                    <div class="card-body">
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Company Name</th>
                                <th scope="col">Employee Count</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Omega Pvt Ltd.</td>
                                <td>56</td>
                                <td>omegacompany@gmail.com</td>
                                <td>
                                    <button type="button" class="btn btn-warning">Edit</button>
                                    <button type="button" class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Gudrev Pvt Ltd.</td>
                                <td>89</td>
                                <td>gudrev232@gmail.com</td>
                                <td>
                                    <button type="button" class="btn btn-warning">Edit</button>
                                    <button type="button" class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Kennix Pvt Ltd.</td>
                                <td>100</td>
                                <td>kennixw@gmail.com</td>
                                <td>
                                    <button type="button" class="btn btn-warning">Edit</button>
                                    <button type="button" class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    props: {

    },
    data() {
        return {
        };
    },

    methods: {

    }
}
</script>
<style lang="scss">
@import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
