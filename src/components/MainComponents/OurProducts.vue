<template>
  <div class="products default">
      <div class="products__title default fz14">
          {{ getSectionTitle }}
      </div>
      <div class="products__container">
          <product-card
            v-for="(product, id) in getProductData" 
            :key="id"
            :product-name='product'
          />
      </div>
      <a class="products__more" href="#">Покажи ещё</a>
  </div>
</template>

<script>
import ProductCard from './ProductCard'

export default {
    components: { ProductCard },
    props: {
        sectionTitle: String
    },
    name: 'our-products',
    data: function() {
        return {
            productsData: {
                ourTea: {
                    title: 'Наш чай',
                    products: ['Шу Пуэр', 'Шэн Пуэр', 'Улун', 'Да Хун Пао']
                },
                ourCrockery: {
                    title: 'Наша посуда',
                    products: ['Заварники', 'Пиалы', 'Чабани', 'Чайники']
                }
            } 
        }
    },
    computed: {
        getProductData: function () {
            return this.productsData[this.sectionTitle].products;
        },
        getSectionTitle: function () {
            return this.productsData[this.sectionTitle].title;
        }
    }


}
</script>

<style lang="scss" scoped>
.products {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 47px;

    &__title {
        align-self: center;
        margin-bottom: 47px;
    }

    &__container {
        width: 100%;

        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    &__more {
        text-decoration: underline;
        text-align: center;
        margin-top: 14px;
        color: var(--green);
    }

}
</style>