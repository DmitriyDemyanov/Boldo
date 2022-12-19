<template>
  <button class="btn" :class="`btn-${buttonStyles}`">{{buttonText}}</button>
</template>

<script>
export default {
  name: 'ButtomMain',
  props: {
    buttonStyles: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      reqired: true,
    }
  }
}
</script>

<style scoped>
.btn {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  padding: 16px 56px;
}
.btn:hover {
  background-color: #69E6A6;
}
.btn-dark {
  background: #0A2640;
  border: 2px solid #ffffff;
  border-radius: 56px;
}

</style>