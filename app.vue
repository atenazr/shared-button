<template>
  <div class="container mx-auto flex justify-around items-center">
      <div class="w-1/4">
          <SharedButton @clickBtn="clickButton" base-size  primary main-text="ورود" css-class="font-bold"></SharedButton>
          <SharedButton @clickBtn="clickButton" base-size  secondary main-text="ورود" css-class="font-medium"></SharedButton>
          <SharedButton @clickBtn="clickButton" base-size  primary-outlined main-text="ورود" css-class="font-medium"></SharedButton>
          <SharedButton @clickBtn="clickButton" base-size  secondary-outlined main-text="ورود" css-class="font-medium"></SharedButton>
          <SharedButton @clickBtn="clickButton" base-size  green main-text="ورود" css-class="font-medium"></SharedButton>
          <SharedButton @clickBtn="clickButton" base-size  red main-text="ورود" css-class="font-medium"></SharedButton>
      </div>

      <div class="w-1/4">
          <SharedButton @clickBtn="clickButton" sm-size primary main-text="ورود" css-class="font-bold"></SharedButton>
          <SharedButton @clickBtn="clickButton" lg-size primary main-text="ورود" css-class="font-bold"></SharedButton>
          <SharedButton @clickBtn="clickButton" base-size with-icon primary css-class="font-medium">
              <template v-slot:btnContent>
                          <span class="flex justify-center items-center">
                              <span>
                                  <img class="w-6 h-6" src="~/assets/images/google-icon.png" >
                              </span>
                              <span class="mr-0.5 md:mr-1">
                                     ورود با گوگل
                              </span>
                          </span>
              </template>
          </SharedButton>
      </div>
  </div>
</template>

<script setup lang="ts">

const clickButton = () => {
  console.log('clicked')
}
</script>