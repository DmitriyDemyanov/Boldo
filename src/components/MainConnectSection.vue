<template>
  <div class="d-flex wrapper-connect justify-content-between">
    <div class="wraaper-image position-relative">
      <img src="@/assets/connect-image-1.png" alt="bg" />
      <div class="img-graphic">
        <img src="@/assets/connect-image-2.png" alt="#" />
      </div>
    </div>

    <div class="wrapper-contact-descr">
      <div class="title">
        We connect our customers with the best, and help them keep up-and stay
        open.
      </div>
      <OurConnectCustumers
        :title="text"
        v-for="(text, ind) in title"
        :key="ind"
      />
      <div class="wrap-btn">
        <ButtonMain buttonText="Start now" buttonStyles="dark" />
      </div>
    </div>
  </div>
</template>

<script>
import OurConnectCustumers from "@/components/OurConnectCustumers";
import ButtonMain from "./ButtonMain.vue";
export default {
  name: "MainConnectSection",
  components: {
    OurConnectCustumers,
    ButtonMain,
  },
  data() {
    return {
      title: [
        {
          text: "We connect our customers with the best.",
        },
        {
          text: "Advisor success customer launch party.",
        },
        {
          text: "Business-to-consumer long tail.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.wrapper-connect {
  margin-top: 190px;
  width: calc(50% -75px);
}
.img-graphic {
  position: absolute;
  bottom: -93px;
  right: 22px;
  /* display: none; */
}
.wrapper-contact-descr {
  width: calc(50% - 75px);
  padding-top: 65px;
}
.title {
  font-family: "Manrope";
  font-weight: 400;
  font-size: 36px;
  line-height: 56px;
  color: #000000;
  margin-bottom: 40px;
}
.wrap-btn {
  margin-top: 56px;
}
</style>
