<template>
  <div class="about">
      <h3 class="about__title default">
          О нас
      </h3>
      <div class="about__description default">
          Mytebay заботится о вашем здоровье. Мы предлагаем только продукты растительного происхождения, без искусственных красителей и ароматизаторов. У нас вы сможете найти китайский чай, японский чай матча и питательные суперфуды. Кроме того, у нас в наличии различные аксессуары высокого качества для горячих напитков.
      </div>
  </div>
</template>

<script>
export default {
    name: 'about-us'

}
</script>

<style lang="scss" scoped>
.about {
    padding: 15px;
    display: flex;
    flex-direction: column;

    &__title {
        margin-bottom: 47px;
        text-align: center;
    }
}
</style>