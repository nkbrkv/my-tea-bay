<template>
  <div class="wrapper">
      <vue-header/>
      <our-products
      :sectionTitle="`ourTea`"
      />
      <tea-fact/>
      <our-products
      :sectionTitle="`ourCrockery`"
      />
      <about-us/>
      <vue-contact/>
      <vue-copyright/>
  </div>
</template>

<script>
import AboutUs from './MainComponents/AboutUs.vue';
import OurProducts from './MainComponents/OurProducts.vue';
import TeaFact from './MainComponents/TeaFact.vue';
import VueHeader from './MainComponents/VueHeader';
import VueContact from './MainComponents/VueContact.vue'
import VueCopyright from './MainComponents/VueCopyright.vue'

export default {
    name: 'main-template',
    components: {
        VueHeader,
        OurProducts,
        TeaFact,
        AboutUs,
        VueContact,
        VueCopyright
    },
    computed: {
        getAllPosts: function() {
            return this.$store.getters.getAllPosts;
        }
    },
    methods: {
        
    },
    beforeMount() {
        this.$store.dispatch('loadAllPosts');
    },
}

</script>

<style>

</style>