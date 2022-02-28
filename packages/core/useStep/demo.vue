<template>
  <div>
    <p>当前步骤: {{ currentStep }}</p>
    <ks-button class="button" @click="next">下一步</ks-button>
    <ks-button class="button" @click="back">上一步</ks-button>
    <ks-button class="button" @click="reset">重置</ks-button>
  </div>
</template>

<script lang="ts">
import { useStep } from './index';
import { ElButton } from 'element-plus';

export default {
  components: {
    KsButton: ElButton,
  },
  setup() {
    const { currentStep, next, back, reset } = useStep(['a', 'b', 'c']);

    return {
      currentStep,
      next,
      back,
      reset,
    };
  },
};
</script>
