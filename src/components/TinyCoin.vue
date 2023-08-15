<script setup lang="ts">
type TinyCoinProps = {
  value: string
};
defineProps<TinyCoinProps>();
</script>

<template>
  <div class="flex money-spin">
    <div class="card">
      <div class="card-content flex">
        <div class="spinningasset coin is-sm">
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
        <div class="ml-2 t-text-white">
          {{ value }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.money-spin {
  .card {
    background: radial-gradient(
            100% 100% at 50% 5%,
            rgba(255, 255, 255, 0.05) 0%,
            rgba(255, 255, 255, 0.03) 100%
    );
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 1rem;
    padding: 0.5rem;
    backdrop-filter: blur(4px);

    > div {
      position: relative;
      z-index: 2;
      background: var(--primary-color);
      border-radius: 0.5rem;
      padding: 10px;
      backdrop-filter: blur(8px);
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05),
      0 1.5px 1.1px rgba(0, 0, 0, 0.034), 0 3.6px 2.5px rgba(0, 0, 0, 0.048),
      0 6.8px 4.8px rgba(0, 0, 0, 0.06), 0 12.1px 8.5px rgba(0, 0, 0, 0.072),
      0 22.6px 15.9px rgba(0, 0, 0, 0.086), 0 54px 38px rgba(0, 0, 0, 0.12);
    }

    &.is-alt {
      background: transparent;
      border: none;

      > .card-content {
        background: #191a2f;
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        z-index: 1;
        top: 1.5rem;
        bottom: 1.5rem;
        width: 4rem;
        background: linear-gradient(to bottom, #00a6fb 0%, #00fddc 100%);
        border-radius: 0.25rem;
        transition: all 0.6s ease-out 0.22s;
      }

      &::before {
        left: 0;
        transform: translateX(1rem);
      }

      &::after {
        right: 0;
        transform: translateX(-1rem);
      }
    }
  }
}
</style>
