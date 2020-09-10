<template>
  <swiper
    ref="mySwiper"
    class="swiper-wrap"
    :options="swiperOptions"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <div
      slot="pagination"
      class="swiper-pagination"
    />
  </swiper>
</template>

<script>
export default {
  name: "Carrousel",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        }
        // Some Swiper option/callback...
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>
<style lang="scss" scoped>
.swiper-wrap {
  width: 400px;
  height: 200px;
  background: #eee;
}
</style>
