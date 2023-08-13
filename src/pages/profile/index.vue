<script setup lang="ts">
import { ref } from 'vue';
import { usePointsStore } from '../../stores/pointsStore';
import ProfileStats from '../../components/ProfileStats.vue';

const { data: { value: { user: { account } } } } = useAuth();

const active = ref(0);
const items = ref([
  {
    label: 'Stats',
    icon: 'pi pi-fw pi-chart-bar'
  },
  {
    label: 'Solutions',
    icon: 'pi pi-fw pi-calendar'
  },
  {
    label: 'Comments',
    icon: 'pi pi-fw pi-pencil'
  },
  {
    label: 'Documentation',
    icon: 'pi pi-fw pi-file'
  },
  {
    label: 'Settings',
    icon: 'pi pi-fw pi-cog'
  }
]);

function changeTab (e) {

}
</script>

<template>
  <div>
    <NuxtLayout name="header-n-sidebar">
      <div class="flex justify-center items-center space-x-20">
        <div class="spinningasset coin absolute fly-away">
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

        <!--        <div class="t-w-[500px] t-h-[200px] bg-cyan-50 fly-away absolute">-->
        <!--          a-->
        <!--        </div>-->

        <div class="lg:px-8 lg:mx-8 px-3">
          <div class="surface-200 t-rounded-md p-3">
            <div class="flex flex-column md:flex-row md:gap-5 md:flex-wrap">
              <div class="flex align-items-center w-full">
                <UserLevel :only-badge="true" />
                <div>{{ account.name }}</div>
              </div>
              <div class="max-md:mt-3">
                <div>
                  <b>Member since: </b>
                  <span class="white-space-nowrap">{{ new Date().toLocaleString() }}</span>
                </div>
                <div>
                  <b>Last seen: </b>
                  <span class="white-space-nowrap">{{ 'Aug 2023' }}</span>
                </div>
              </div>

              <div class="max-md:mt-3">
                <div>
                  <b>Following: </b>
                  <span class="white-space-nowrap">{{ 0 }}</span>
                </div>
                <div>
                  <b>Followers: </b>
                  <span class="white-space-nowrap">{{ 0 }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex gap-5 mt-5 h-max max-md:t-flex-wrap">
            <div class="t-w-full md:t-w-2/3">
              <div class="p-3 t-min-h-full gradient-black-white t-rounded-md flex">
                <div class="t-w-1/3 md:t-w-1/5">
                  <img src="/img/placeholder.png" class="block h-full" alt="todo">
                </div>
                <div class="t-w-2/3 md:t-w-4/5 t-pl-2">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi atque autem cum eos est eum exercitationem expedita explicabo labore maxime, nobis quasi sit suscipit ut. Accusamus culpa perspiciatis quisquam.</p>
                  <div><Button label="LEARN MORE" severity="secondary" type="null" class="p-1 text-sm t-mt-3" /></div>
                </div>
              </div>
            </div>

            <div class="t-w-full md:t-w-1/3 p-3 surface-ground t-rounded-md h-full flex">
              <div class="t-w-1/3 md:t-w-1/5">
                <img src="/img/placeholder.png" class="block h-full" alt="todo">
              </div>
              <div class="t-w-2/3 md:t-w-4/5 t-pl-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi atque autem cum eos est eum exercitationem expedita explicabo labore maxime, nobis quasi sit suscipit ut. Accusamus culpa perspiciatis quisquam.</p>
                <div><Button label="LEARN MORE" severity="secondary" type="null" class="p-1 text-sm t-mt-3" /></div>
              </div>
            </div>
          </div>

          <div class="mt-5">
            <TabMenu v-model:activeIndex="active" :model="items" @tab-change="changeTab" />
            <div class="surface-ground">
              <div v-if="active === 0">
                <ProfileStats />
              </div>
            </div>
            <div class="surface-ground">
              <div v-if="active === 1">
                <CompletedTasks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped lang="scss">
@mixin flyAway($top, $left) {
  @keyframes flyAway {
    5% {
      left: 0;
    }
    25% {
      top: 200px;
      left: 0px;
    }
    50% {
      top: 200px;
      left: calc(100% - 320px);
    }
    75% {
      top: 0px;
      left: calc(100% - 320px);
    }
    100% {
      top: 0px;
      left: 0;
    }
  }
  animation: flyAway 4s infinite !important;
}

.fly-away {
  $top: 0;
  $left: 0;
  top: $top;
  left: $left;
  position: absolute;
  &:hover {
    @include flyAway($top, $left);
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
