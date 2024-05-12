<script setup lang="ts">
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import { nextTick, ref, onMounted } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  brand: String,
  assetPath: String
})

const open = ref(false)
const target = ref()
const { activate, deactivate } = useFocusTrap(target)

async function reveal() {
  open.value = true
  document.body.classList.add('modal-open')

  await nextTick()
  activate()
}

async function hide() {
  open.value = false
  document.body.classList.remove('modal-open')
  deactivate()
}

onMounted(() => {
  document.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
      if (open.value === true) {
        open.value = false
        document.body.classList.remove('modal-open')
      }
    }
  })
})
</script>

<template>
  <button
    class="w-full rounded-lg align-middle select-none bg-slate-500 text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-2 px-6 hover:bg-slate-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
    type="button"
    @click="reveal"
  >
    More details
  </button>

  <Teleport to="body">
    <div v-if="open" ref="target">
      <div class="flex items-start justify-center text-center">
        <transition
          enter-active-class="transition ease-out duration-300 transform"
          enter-from-class="opacity-0 translate-y-10 scale-95"
          enter-to-class="opacity-100 translate-y-0 scale-100"
          leave-active-class="ease-in duration-200"
          leave-from-class="opacity-100 translate-y-0 scale-100"
          leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95"
        >
          <div v-if="open" class="modal-mask">
            <div
              class="modal-container relative flex flex-col h-screen md:w-9/12 xl:w-1/2 lg:h-4/5 bg-white p-6 rounded-lg text-left shadow-xl modal"
              role="dialog"
              ref="modal"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <h3
                id="modal-headline"
                class="px-6 mb-4 font-medium block text-xl antialiased leading-snug tracking-normal text-blue-gray-900"
              >
                {{ props.project.brand }}<span v-if="project.type"> ({{ project.type }})</span>
              </h3>

              <div
                class="flex flex-col bg-white p-6 pt-0 rounded-lg"
                :class="
                  !!project.screenshots
                    ? 'lg:h-3/6 lg:max-h-[50%] overflow-x-scroll'
                    : 'h-full overflow-y-scroll'
                "
              >
                <div class="lg:flex lg:items-start gap-4">
                  <div class="basis-2/3">
                    <p v-for="details in project.details" :key="details" class="mb-4">
                      {{ details.paragraph }}
                    </p>
                  </div>

                  <div class="basis-1/3 bg-gray-100 p-3">
                    <h3 class="mb-4 font-medium">Technologies I used</h3>

                    <ul class="flex flex-wrap gap-3 lg:block">
                      <li v-for="tech in project.techstack" :key="tech.name">
                        <span class="mb-1 text-sm bg-slate-500 text-white px-1 rounded">{{
                          tech.name
                        }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div v-if="!!project.screenshots" class="lg:h-3/6 lg:max-h-[50%] overflow-x-scroll">
                <div class="flex w-max h-full gap-4">
                  <div
                    v-for="(screenshot, index) in project.screenshots"
                    :key="index"
                    class="h-full"
                  >
                    <img
                      :src="`${assetPath}${screenshot.src}`"
                      :alt="screenshot.alt"
                      class="h-full"
                    />
                  </div>
                </div>
              </div>
              <button
                tabindex="5"
                @click="hide()"
                class="absolute top-4 right-6 hover:bg-gray-200 p-1 rounded-full"
              >
                <CIcon icon="cilX" customClassName="icon fill-gray-400 w-7" />
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}
.modal-container {
  margin: auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
