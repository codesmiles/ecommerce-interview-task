<template>
  <label
    :for="labelFor"
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >{{ labelContent }}</label
  >
  <input
    :type="inputType"
    :v-model="inputModel"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
     <!-- input fields -->
      <!-- <div v-for="(field, index) in inputFieldData" :key="index" class="">
        <addProductComp
          :labelFor="field.labelFor"
          :labelContent="field.labelContent"
          :inputType="field.inputType"
          :inputModel="field.inputModel"
        />
      </div> -->
</template>

<script>
export default {
  name: "add-product",
  props: ["labelFor", "labelContent", "inputType", "inputModel"],
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
    };
  },
};
</script>

<style></style>
