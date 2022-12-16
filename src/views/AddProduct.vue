<template>
  <div>
    <h1 class="uppercase text-4xl text-center">ADD PRODUCT</h1>
    <form class="w-4/5 mx-auto" @submit="SubmitForm">
      <div class="my-5">
        <label
          for="title"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >title</label
        >
        <input
          type="text"
          v-model="title"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="my-5">
        <label
          for="description"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >description</label
        >
        <input
          type="text"
          v-model="description"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="my-5">
        <label
          for="price"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >price</label
        >
        <input
          type="number"
          v-model="price"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="my-5">
        <label
          for="category"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >category</label
        >
        <input
          type="text"
          v-model="category"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="my-5">
        <label
          for="image"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >image</label
        >
        <input
          type="file"
          name="myImage"
          accept="image/png, image/gif, image/jpeg"
          id="img"
          @change="onImageSelected"
          class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        />
      </div>

      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "add-product",

  data() {
    return {
      title: "food",
      description: "food is good",
      price: "250",
      category: "goods",
      selectedImage: null,
      rating: {
          rate: 0,
          count: 0,
        },
    };
  },
  methods: {
    onImageSelected(e) {
      this.selectedImage = e.target.files[0];
      console.log(this.selectedImage);
    //   const formData = new FormData();
    //     formData.append("image", this.selectedImage);
    //     formData.get("image");
    },
    SubmitForm(e) {
      e.preventDefault();
      const inputData = {
        id: this.products.length + 1,
        title: this.title,
        description: this.description,
        price: this.price,
        category: this.category,
        image: this.selectedImage,
        rating: this.rating,
      };
        this.$store.dispatch("ADD_PRODUCT_ASYNC", inputData);
        this.$router.push("/");

    },
  },
  computed: {
    ...mapState({
      products: (state) => state.products, //IMPORTANT
    })
  },
};
</script>
<style></style>
