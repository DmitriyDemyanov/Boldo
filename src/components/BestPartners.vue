<template>
  <div class="wrapper-partners d-flex justify-content-between">

    <div class="wrapper-title">
      <div class="title">We connect our customers with the best, and help them keep up-and stay open.</div>

      <ItemPartners text="We connect our customers with the best.">
        <template v-slot:icon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z"
              stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16 8L2 22" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.5 15H9" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </template>
      </ItemPartners>

      <ItemPartners text="Advisor success customer launch party.">
        <template v-slot:icon>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_62_553)">
              <path
                d="M1.77502 12.6543C1.77502 12.6543 5.77502 4.6543 12.775 4.6543C19.775 4.6543 23.775 12.6543 23.775 12.6543C23.775 12.6543 19.775 20.6543 12.775 20.6543C5.77502 20.6543 1.77502 12.6543 1.77502 12.6543Z"
                stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M12.775 15.6543C14.4319 15.6543 15.775 14.3112 15.775 12.6543C15.775 10.9974 14.4319 9.6543 12.775 9.6543C11.1182 9.6543 9.77502 10.9974 9.77502 12.6543C9.77502 14.3112 11.1182 15.6543 12.775 15.6543Z"
                stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_62_553">
                <rect width="24" height="24" fill="white" transform="translate(0.775024 0.654297)" />
              </clipPath>
            </defs>
          </svg>
        </template>
      </ItemPartners>

      <ItemPartners text="Business-to-consumer long tail.">
        <template v-slot:icon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_62_578)">
              <path
                d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 1V3" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 21V23" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4.22 4.21997L5.64 5.63997" stroke="#0A2640" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M18.36 18.3601L19.78 19.7801" stroke="#0A2640" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M1 12H3" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21 12H23" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4.22 19.7801L5.64 18.3601" stroke="#0A2640" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M18.36 5.63997L19.78 4.21997" stroke="#0A2640" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_62_578">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

        </template>
      </ItemPartners>
    </div>

    <div class="wrapper-image">
      <img src="@/assets/bestPartners-1.png" alt="photo">
      <div class="img-graphic">
        <img src="@/assets/bestPartners-graphic.png" alt="graphic">
      </div>
    </div>

  </div>


</template>

<script>
import ItemPartners from '@/components/ItemPartners';
export default {
  name: 'BestPartners',
  components: {
    ItemPartners,
  }
}
</script>

<style scoped>
.wrapper-partners {
  margin-top: 185px;

}

.wrapper-title {
  padding-top: 95px;
  width: calc(50% - 75px);
}

.title {
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 36px;
  line-height: 56px;
  color: #000000;
  margin-bottom: 64px;
}

.wrapper-image {
  width: calc(50% - 75px);
  position: relative;
}

.img-graphic {
  position: absolute;
  top: 275px;
  left: 16px;
}
</style>