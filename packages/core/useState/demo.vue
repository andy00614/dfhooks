<template>
  <div>
    <p>计数值: {{ count }}</p>
    <button class="button" @click="onClick">按钮</button>
  </div>
</template>

<script lang="ts">
import { useState } from './index';

export default {
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
