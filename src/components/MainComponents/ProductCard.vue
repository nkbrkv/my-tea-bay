<template>
  <div class="product">
      <img 
      src='@/assets/our_products/puer.jpeg'
      class="product__image"
      />
      <a class="product__title default">
        {{ productName }}
      </a>
  </div>
</template>

<script>
export default {
    name: 'product-card',
    props: {
        productName: String
    },
    data: function() {
        return {
          
        }
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>

.product {
    width: 165px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__image {
        width: 132px;
        height: 126px;
        margin-bottom: 15px;
    }
}

</style>