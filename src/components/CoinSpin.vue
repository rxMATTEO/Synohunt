<script lang="ts" setup>

</script>
<template>
  <div>
    <div class="spinningasset coin absolute fly-away t-left-[500px] t-top-[500px]">
      <div>
        <div />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <em />
        <em />
        <div />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin flyAway($top, $left) {
  .fly-away {
    top: $top;
    left: $left;
    position: absolute;
  }
  @keyframes flyAway {
    5% {
      left: $left;
      top: $top;
    }
    25% {
      top: 200px;
      left: $left;
    }
    50% {
      top: 200px;
      left: calc(100% - 320px);
    }
    75% {
      top: 50px;
      left: calc(100% - 250px);
    }
    100% {
      top: 0px;
      left: calc(100% - 200px);
    }
  }
}
@keyframes brightness {
  0%,
  50%,
  100% {
    filter: blur(0px) brightness(120%)
    drop-shadow(0 0 2.5px rgba(255, 255, 255, 0.1))
    drop-shadow(0 0 5px rgba(255, 255, 255, 0.075))
    drop-shadow(0 0 7.5px rgba(255, 255, 255, 0.045))
    drop-shadow(0 0 10px rgba(255, 255, 255, 0.025));
  }
  25%,
  75% {
    filter: blur(1px) brightness(50%)
    drop-shadow(0 0 2.5px rgba(255, 255, 255, 0.1))
    drop-shadow(0 0 5px rgba(255, 255, 255, 0.075))
    drop-shadow(0 0 7.5px rgba(255, 255, 255, 0.045))
    drop-shadow(0 0 10px rgba(255, 255, 255, 0.025));
  }
}

@keyframes spin {
  0% {
    transform: rotateY(-180deg);
  }
  100% {
    transform: rotateY(180deg);
  }
}

.spinningasset {
  text-align: left;
  transition: all 0.4s ease-out;
  cursor: pointer;
  animation: brightness 2.5s infinite linear;
  &.fly-away{
    @include flyAway(100px,200px);
    animation: brightness 2.5s infinite linear, flyAway 1.5s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 8px;
    width: 11px;
    margin: auto;
    background-size: 100px 400%;
    background-position: center;
  }

  > div {
    position: relative;
    z-index: 2;
    perspective: 10000px;
    transform-style: preserve-3d;
    transform-origin: center;
    animation: spin 2.5s infinite linear;

    > * {
      width: 100%;
      height: 100%;
      position: absolute;
      backface-visibility: inherit;
      background-size: cover;
    }

    > div:first-child {
      transform: translateZ(-6px);
    }

    > div:last-child {
      transform: translateZ(6px);
      background-image: url(https://res.cloudinary.com/gloot/image/upload/v1632752594/Marketing/202109_gloot2/Coins_side_front.svg);
    }

    em {
      filter: blur(0.5px);

      &:first-of-type {
        transform: translateZ(0px) rotateY(-6deg);
      }

      &:last-of-type {
        transform: translateZ(0px) rotateY(6deg);
      }
    }

    i {
      filter: blur(0.5px);

      &:nth-of-type(1) {
        transform: translateZ(-5px);
      }

      &:nth-of-type(2) {
        transform: translateZ(-4px);
      }

      &:nth-of-type(3) {
        transform: translateZ(-3px);
      }

      &:nth-of-type(4) {
        transform: translateZ(-2px);
      }

      &:nth-of-type(5) {
        transform: translateZ(-1px);
      }

      &:nth-of-type(6) {
        transform: translateZ(0px);
      }

      &:nth-of-type(7) {
        transform: translateZ(1px);
      }

      &:nth-of-type(8) {
        transform: translateZ(2px);
      }

      &:nth-of-type(9) {
        transform: translateZ(3px);
      }

      &:nth-of-type(10) {
        transform: translateZ(4px);
      }

      &:nth-of-type(11) {
        transform: translateZ(5px);
      }
    }
  }

  &.is-sm {
    width: 24px;
    height: 24px;
    transform: scale(0.24);
    transform-origin: left top;
    filter: none;

    &,
    > div {
    }
  }

  &.coin {
    > div {
      width: 100px;
      height: 100px;

      > div:first-child {
        background-image: url(https://res.cloudinary.com/gloot/image/upload/v1632752594/Marketing/202109_gloot2/Coins_side_back.svg);
      }

      > div:last-child,
      &::after,
      i,
      em {
        background-image: url(https://res.cloudinary.com/gloot/image/upload/v1632752594/Marketing/202109_gloot2/Coins_side_front.svg);
      }
    }
  }
}
</style>
