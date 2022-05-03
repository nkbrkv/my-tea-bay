<template>
  <div class="contact">
      <h3 class="contact__title default">
          Контакты
      </h3>
      <div class="contact__info default">
          <span>21021</span>
          <span>Винница</span>
          <span>Келетская 100</span>
          <br>
          <span>+380971234567</span>
          <span>mytebay@gmail.com</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'vue-contacts'
}
</script>

<style lang="scss" scoped>
.contact {
    height: 321px;
    margin-bottom: 76px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    background-image: url(../../assets/contact/contact.png);
    background-size: contain;
    background-repeat: no-repeat;

    &__title {
        text-align: center;
        margin-bottom: 45px;
    }

    &__info {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        line-height: 142.52%;
    }
}
</style>