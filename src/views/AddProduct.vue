<template>
  <div>
    <h1 class="uppercase text-4xl text-center">ADD PRODUCT</h1>
    <form class="w-4/5 mx-auto">
      <!-- input fields -->
      <div v-for="(field, index) in inputFieldData" :key="index" class="">
        <addProductComp
          :labelFor="field.labelFor"
          :labelContent="field.labelContent"
          :inputType="field.inputType"
          :inputModel="field.inputModel"
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
          @change="image"
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
import addProductComp from "../components/addproductComp.vue";
export default {
  name: "add-product",
  components: {
    addProductComp,
  },
  data() {
    return {
      inputFieldData: [
        {
          labelFor: "title",
          labelContent: "title",
          inputType: "text",
          inputModel: "title",
        },
        {
          labelFor: "price",
          labelContent: "price",
          inputType: "text",
          inputModel: "price",
        },
        {
          labelFor: "category",
          labelContent: "category",
          inputType: "text",
          inputModel: "category",
        },
        {
          labelFor: "description",
          labelContent: "description",
          inputType: "text",
          inputModel: "description",
        },
      ],
    };
  },
  methods: {
    image(e) {
      this.image = e.target.files[0];
      console.log(this.image);
    },
  },
};
</script>
<style></style>
