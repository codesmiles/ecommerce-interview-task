<template>
  <div>
    <h1 class="uppercase text-4xl text-center">ADD PRODUCT</h1>
    <form class="w-4/5 mx-auto" @submit="SubmitForm">
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
          inputType: "number",
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
      selectedImage: null,
    };
  },
  methods: {
    onImageSelected(e) {
        return this.selectedImage = e.target.files[0];
    },
    SubmitForm(e) {
        e.preventDefault();
      const formData = new FormData();
        formData.append("title", this.inputFieldData[0].inputModel);
        formData.append("price", this.inputFieldData[1].inputModel);
        formData.append("category", this.inputFieldData[2].inputModel);
        formData.append("description", this.inputFieldData[3].inputModel);
      formData.append("image", this.selectedImage, this.selectedImage.name);
        
      
        console.log(formData.get("image"));
        console.log(formData.get("title"));
        console.log(formData.get("price"));
        console.log(formData.get("category"));
        console.log(formData.get("description"));

    //   this.$store.dispatch("ADD_PRODUCT", formData);
    },
  },
};
</script>
<style></style>
