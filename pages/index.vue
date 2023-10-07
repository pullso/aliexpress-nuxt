<template>
  <MainLayout>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        <div v-if="products" v-for="product in products.data" :key="product.id">
          <ProductComponent :product="product" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layouts/MainLayout.vue";
import ProductComponent from "~/components/ProductComponent.vue";

const products = {
  data: [
    { title: 'test title', description: 'descr', url: 'https://picsum.photos/id/82/800/800', id: 1, price: 100 },
    { title: 'test title', description: 'descr', url: 'https://picsum.photos/id/82/800/800', id: 2, price: 20000 },
    { title: 'test title', description: 'descr', url: 'https://picsum.photos/id/82/800/800', id: 3, price: 23 },
    { title: 'test title', description: 'descr', url: 'https://picsum.photos/id/82/800/800', id: 4, price: 12 },
  ]
}
</script>
