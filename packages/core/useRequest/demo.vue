<template>
  <div>
    <h1>自动请求</h1>
    <div v-if="loading">loading...</div>
    <div v-else>请求结果： {{ data }}</div>
  </div>
</template>

<script lang="ts">
// import { mockRequest } from './utils';
import { useRequest } from './index';
type MockRequest = () => Promise<string>;
const mockRequest: MockRequest = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('ok');
    }, 1000);
  });

export default {
  setup() {
    const { loading, data } = useRequest(mockRequest);
    return {
      loading,
      data,
    };
  },
};
</script>
