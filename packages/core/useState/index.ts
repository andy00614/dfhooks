import { ref, Ref } from 'vue-demi';

// 使用场景1：子组件修改父组件场景
export function useState<T>(val: T): [Ref<T>, (val: T) => void] {
  const state = ref(val) as Ref<T>;
  const setState = (v: T) => {
    state.value = v;
  };
  return [state, setState];
}
