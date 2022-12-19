<template>
  <div>
    <div class="wrapper-template d-flex justify-content-between">

      <div class="wrapper-text">
        <div class="title">Save time by building fast with Boldo Template </div>
        <div class="subtitle">Funding handshake buyer business-to-business metrics iPad partnership. First mover
          advantage
          innovator success deployment non-disclosure.</div>
        <div class="wrapper-btn">
          <ButtonMain buttonStyles="dark" buttonText="Buy template" />
          <ButtonMain buttonStyles="dark" buttonText="Explore" />
        </div>
      </div>

      <div class="wrapper-graphics">
        <div><img src="@/assets/graphics.png" alt="img"></div>
      </div>
    </div>
    <div class="wrapper-logos">
      <img src="@/assets/Logos-bar.png" alt="logos">
    </div>
  </div>
</template>

<script>
import ButtonMain from '@/components/ButtonMain';

export default {
  name: 'TemplateBoldo',
  components: {
    ButtonMain,
  }
}
</script>

<style scoped>
.title {
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  color: #fff;
}

.subtitle {
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #F1F1F1;
  margin-top: 16px;
  margin-bottom: 40px;
}


.wrapper-template {
  padding-top: 162px;
}

.wrapper-text {
  width: 47%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.wrapper-graphics {
  width: calc(54% - 139px);
}

.wrapper-btn :nth-child(1) {
  margin-right: 24px;
}

.wrapper-btn :hover {
  background-color: #69E6A6;
}
.wrapper-logos {
  margin-top: 56px;
  display: flex;
  position: relative;
}
.wrapper-logos:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(
    to right,
    rgba(10,38,64,0.7) 0%,
    rgba(10,38,64,0) 40%,
    rgba(10,38,64,0) 60%,
    rgba(10,38,64,0.7) 100%
    );
}
.wrapper-logo-bg-dis {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>