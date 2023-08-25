<template>
  <div
      @click="$emit('clickBtn')"
      class='rounded-lg md:rounded-2xl my-2 md:my-4 flex justify-center items-center w-full md:px-8 py-2 md:py-4 px-4 cursor-pointer hover:opacity-80 transition-all border-2 '
      :class="[modeBtn,sizeBtn,cssClass]">
        <span v-if="!withIcon">
            {{ mainText }}
        </span>
    <template v-else>
      <slot name="btnContent"></slot>
    </template>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  primary?:boolean,
  secondary?:boolean,
  green?:boolean,
  red?:boolean,
  primaryOutlined?:boolean,
  lgSize?:boolean,
  baseSize?:boolean,
  smSize?:boolean,
  withIcon?:boolean,
  mainText?:string,
  cssClass?:string
}

const props =  withDefaults(defineProps<Props>(),{
  primary:false,
  secondary:false,
  primaryOutlined:false,
  withIcon:false,
  lgSize:false,
  baseSize:false,
  smSize:false,
  mainText:'',
  cssClass:''
})

const emit = defineEmits(['clickBtn'])
const modeBtn = props.primary ? 'btn-primary' : props.secondary ? 'btn-secondary' : props.primaryOutlined ? 'btn-primary-outlined' : props.red ? 'btn-red': props.green ?'btn-green':''
// console.log('mode btn',modeBtn)
const sizeBtn = props.smSize ? 'btn-sm':props.baseSize?'btn-base':props.lgSize?'btn-lg':''
</script>

<style></style>