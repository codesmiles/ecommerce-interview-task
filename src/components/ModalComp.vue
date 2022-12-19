<template>
    <div id="app" class="relative">
      <transition name="fade">
        <div v-if="isModalVisible">
          <div
            @click="onToggle"
            class="fixed h-screen w-screen bg-black opacity-70 inset-0 z-0"
          ></div>
          <div
            class="w-full max-w-lg p-3 fixed rounded-xl shadow-lg bg-white top-1/3 left-0 right-0 m-auto z-10"
          >
            <div class="text-center p-1 flex-auto justify-center leading-6">
              <div class="text-right space-x-4 md:block">
                <span
                  @click="onToggle"
                  class="mb-2 md:mb-0 p-3 text-lg hover:bg-gray-200 rounded-full cursor-pointer"
                >
                  ╳
                </span>
              </div>
              <h2 v-if="title ===nTitle[0]" class="text-2xl font-bold py-4 text-red-400">{{ title }}</h2>
              <h2 v-else-if="title ===nTitle[1]" class="text-2xl font-bold py-4 text-green-500">{{ title }}</h2>
              <p class="text-md text-gray-500 px-8">
                {{ content }}
              </p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: "ModalComponent",
    props:["title","content" ,"isOpen"],
    data() {
      return {
        nTitle:["ERROR","SUCCESS"],
      };
    },
  
    computed: {
      isModalVisible() {
        return this.isOpen;
      },
    },
  
    methods: {
      onToggle() {
      // this.isOpen = !this.isOpen;
        this.$emit("toggle");
      },
    },
  };
  </script>
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 500ms ease-out;
  }
  </style>
  