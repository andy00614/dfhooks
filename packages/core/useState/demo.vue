<template>
  <div>
    <p>计数值: {{ count }}</p>
    <Button @click="onClick">按钮</Button>
  </div>
</template>

<script lang="ts">
import { Button } from 'df-hook-document';
import { useState } from './index';

export default {
  components: {
    Button,
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
