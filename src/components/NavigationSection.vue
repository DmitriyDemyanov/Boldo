<template>
  <div class="wrapper-navigation position-relative">
    <div class="bg-nav"><img src="@/assets/bg-nav.png" alt=""></div>
    <BContainer>
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <img src="@/assets/Logo.svg" alt="logo">
        </div>
        <div class="nav-link">
          <a href="#">Product</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <button class="nav-btn">Log In</button>
        </div>
      </div>
    </BContainer>
  </div>
</template>

<script>
export default {
  name: 'NavigationSection',
}
</script>

<style scoped>
.wrapper-navigation {
  padding-top: 56px;
  width: 100%;
  height: 800px;
  background-color: #0A2640;
  z-index: -2;
}
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
.bg-nav {
  position: absolute;
  top:0;
  right: 0;
  z-index: -1;
}
</style>