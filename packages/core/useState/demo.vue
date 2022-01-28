<template>
  <div>
    <p>计数值: {{ count }}</p>
    <ks-button class="button" @click="onClick">按钮</ks-button>
  </div>
</template>

<script lang="ts">
import { useState } from './index';
import { ElButton } from 'element-plus';

export default {
  components: {
    KsButton: ElButton,
  },
  setup() {
    const [count, setCount] = useState(0);
    function onClick() {
      setCount(++count.value);
    }

    return {
      count,
      onClick,
    };
  },
};
</script>
