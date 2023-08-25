<script setup lang="ts">

</script>

<template>
  <div class="absolute top-0 left-0 right-0 bottom-0 t-z-50 surface-ground">
    <div class="flex h-full justify-content-center align-items-center flex-column">
      <h1>Circle loader with checkmark completed state <small>CSS Animation</small></h1>

      <div class="circle-loader">
        <div class="checkmark draw" />
      </div>

      <p>
        <button id="toggle" type="button" class="btn btn-success">
          Toggle Completed
        </button>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
$brand-success: #5cb85c;
$loader-size: 7em;
$check-height: calc($loader-size/2);
$check-width: calc($check-height/2);
$check-left: calc($loader-size/6 + $loader-size/12);
$check-thickness: 3px;
$check-color: $brand-success;

.circle-loader {
  margin-bottom: calc($loader-size/2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-left-color: $check-color;
  animation: loader-spin 1.2s infinite linear;
  position: relative;
  display: inline-block;
  vertical-align: top;
  border-radius: 50%;
  width: $loader-size;
  height: $loader-size;
}

.load-complete {
  -webkit-animation: none;
  animation: none;
  border-color: $check-color;
  transition: border 500ms ease-out;
}

.checkmark {
  display: none;

  &.draw:after {
    animation-duration: 800ms;
    animation-timing-function: ease;
    animation-name: checkmark;
    transform: scaleX(-1) rotate(135deg);
  }

  &:after {
    opacity: 1;
    height: $check-height;
    width: $check-width;
    transform-origin: left top;
    border-right: $check-thickness solid $check-color;
    border-top: $check-thickness solid $check-color;
    content: '';
    left: $check-left;
    top: $check-height;
    position: absolute;
  }
}

@keyframes loader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes checkmark {
  0% {
    height: 0;
    width: 0;
    opacity: 1;
  }
  20% {
    height: 0;
    width: $check-width;
    opacity: 1;
  }
  40% {
    height: $check-height;
    width: $check-width;
    opacity: 1;
  }
  100% {
    height: $check-height;
    width: $check-width;
    opacity: 1;
  }
}
</style>
