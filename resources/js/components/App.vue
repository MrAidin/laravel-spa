<template>
    <main>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <RouterLink to="/" class="nav-link active" aria-current="page">home</RouterLink>
                        </li>
                        <li class="nav-item">

                            <RouterLink to="/Blogs" class="nav-link ">blogs</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/contact" class="nav-link">contact</RouterLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </main>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>

</script>
