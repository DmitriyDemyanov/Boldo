<template>
  <div class="container wrapper-footer-win position-relative">
    <div class="bg-footer"><img src="@/assets/bg-footer.png" alt=""></div>
    <div class="title">An enterprise template to ramp up your company website</div>
    <div class="wrapper-input d-flex justify-content-center align-items-center">
      <b-form-input class="input"  placeholder="Your email address">
      </b-form-input>
      <ButtonMain buttonStyles="dark" buttonText="Start now"/>
    </div>
  </div>
</template>

<script>
import ButtonMain from '@/components/ButtonMain';
export default {
name: 'FooterWindow',
components: {
  ButtonMain,
}
}
</script>

<style scoped>
.wrapper-footer-win {
  margin-top: 124px;
  min-height: 370px;
  background: #0A2640;
  border-radius: 12px;
  padding: 72px 242px;
}
.title {
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 50px;
}
.input {
  height: 56px;
  border-radius: 240px;
  border: 2px solid #FFFFFF;
  width: 370px;
  padding: 12px 32px;
  margin-right: 24px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #000;
  }
 .input::placeholder {
  color: #000;
 }
 .bg-footer {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

 }
</style>