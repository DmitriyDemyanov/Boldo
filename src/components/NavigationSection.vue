<template>
  <div>
    <div class="container position-relative">
      <div class="d-flex align-items-center justify-content-between wrapper-position">
        <router-link to="/">
          <img src="@/assets/Logo.svg" alt="logo">
        </router-link>
        <div class="nav-link">
          <a href="#">Product</a>
          <a href="#">Services</a>
          <router-link  to="/about">About</router-link>
          <button class="nav-btn">Log In</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationSection',
}
</script>

<style scoped>
.nav-link a {
  margin-right: 40px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: #fff;
  text-decoration: none;
}

.nav-btn {
  background-color: #fff;
  border-radius: 24px;
  padding: 8px 40px;
  color: #0A2640;
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  border: none;
}
.wrapper-position {
  padding-top: 56px;
  position: absolute;
  top: 0;
  left: 0.75rem;
  right: 0.75rem;
}
</style>