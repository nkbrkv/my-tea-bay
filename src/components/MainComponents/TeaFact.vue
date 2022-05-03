<template>
  <div class="fact default">
      <div class="fact__dots">
          <svg class="fact__dot" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="8.90911" cy="7.5" rx="8.18182" ry="7.5" fill="white"/>
          </svg>
          <svg class="fact__dot" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="8.90911" cy="7.5" rx="8.18182" ry="7.5" fill="white"/>
          </svg>
      </div>
      <h3 class="fact__title">
          Чайный факт
      </h3>
      <div class="fact__description">
          Чай был настолько ценен в 18 веке, что хранился в запертом сундуке.
      </div>
  </div>
</template>

<script>
export default {
    name: 'tea-fact'

}
</script>

<style lang="scss" scoped>
.fact {
    height: 180px;
    background-color: var(--green);
    padding: 15px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    margin-bottom: 47px;

    &__title {
        color: var(--white);
        position: relative;
        top: -8px;
    }

    &__description {
        max-width: 80vw;
        height: 100%;
        line-height: 220.52%;
        padding-top: 10px;

        text-align: center;
        color: var(--white);
    }
    &__dots {
        display: flex;
        justify-content: space-between;
        width: 100%;
        
    }
}
</style>