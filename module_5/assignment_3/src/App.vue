<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <router-link to="/">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
          </router-link>
          <router-link to="/product">
            <li class="nav-item">
              <a class="nav-link" href="#">Product</a>
            </li>
          </router-link>
          <router-link to="/settings">
            <li class="nav-item">
              <a class="nav-link" href="#">Settings</a>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  components: {},
};
</script>
