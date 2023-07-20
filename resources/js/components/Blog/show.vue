<template>
    <div>
        <div class="container">


            <div class="row">


                <div class="col-lg-12 mb-4">
                    <router-link :to='{name:"createBlog"}' class="btn btn-success">Create</router-link>
                </div>

                <div class="col-12">
                    <div class="table-responsive">
                        <table class="table table-bordered" >
                            <thead class="bg-primary text-white">
                            <tr>
                                <th>ID</th>
                                <th>title</th>
                                <th>Content</th>
                                <th>created_at</th>
                                <th>setting</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="blog in blogs" :key="blog.id">
                                <td>{{ blog.id }}</td>
                                <td>{{ blog.title }}</td>
                                <td>{{ blog.content }}</td>
                                <td>{{ blog.created_at }}</td>
                                <td>
                                    <router-link :to='{name:"editBlog",params:{id:blog.id}}' class="btn btn-info">edit
                                    </router-link>
                                    <a type="button" class="btn btn-danger" @click="deleteBlog(blog.id)">delete</a>
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
    name: "blogs",
    data() {
        return {
            blogs: []
        }
    },
    mounted() {
        this.ShowBlogs()
    },
    methods: {
        async ShowBlogs() {
            await this.axios.get('/api/blog').then(response => {
                this.blogs = response.data;
            }).catch(error => {
                this.blogs = []
            })
        },
        deleteBlog(id) {
            if (confirm("Are You Sure?")) {
                this.axios.delete('/api/blog/' + id).then(response => {
                    this.ShowBlogs();
                }).catch(error => {
                    console.log()
                })
            }
        }
    }

}
</script>
