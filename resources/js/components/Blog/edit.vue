<template xmlns="http://www.w3.org/1999/html">
    <div class="container">
        <div class="row">
            <div class="card">
                <div class="card-header">
                    Edit blog
                </div>
                <div class="card-body">
                    <form @submit.prevent="editBlog">
                        <div class="form-group mt-2">
                            <lablel>title</lablel>
                            <input type="text" class="form-control" v-model="blog.title">
                        </div>
                        <div class="form-group mt-2">
                            <lablel>content</lablel>
                            <textarea type="text" class="form-control" v-model="blog.content"></textarea>
                        </div>
                        <div class="form-group mt-2">
                            <button type="submit" class="btn btn-success">save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "edit-blog",
    data() {
        return {
            blog: {
                title: "",
                content: "",
            }
        }
    }, mounted() {
        this.showBlog()
    }

    , methods: {
        async showBlog() {
            await this.axios.get('/api/blog/' + this.$route.params.id).then(response => {
                this.blog.title = response.data.title;
                this.blog.content = response.data.content;


            }).catch(error => {
                console.log(error)
            })
        },
        async editBlog() {
            await this.axios.put('/api/blog/' + this.$route.params.id, this.blog).then(response => {
                this.$router.push({
                    name: "showBlog"
                })
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
