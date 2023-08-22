<template>
    <div>
      <b-carousel
        id="carouselExample"
        v-model="slide"
        :interval="5000"
        controls
        indicators
        background="#333"
      >
        <!-- Carousel Slides -->
        <b-carousel-slide
          v-for="(item, index) in items"
          :key="index"
          :img-src="item.imgSrc"
          :caption="item.caption"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        slide: 0, // Initial active slide
        items: [
          {
            imgSrc: 'https://i.postimg.cc/vTDtDVBK/pexels-andre-moura-3151392.jpg',
            caption: 'First slide',
          },
          {
            imgSrc: 'https://i.postimg.cc/LsL9KC3C/pexels-jeshootscom-1040159.jpg',
            caption: 'Second slide',
          },
          {
            imgSrc: 'https://i.postimg.cc/LsL9KC3C/pexels-jeshootscom-1040159.jpg',
            caption: 'Third slide',
          },
        ],
      };
    },
  };
 </script>