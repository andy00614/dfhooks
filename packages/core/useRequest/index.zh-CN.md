---
map:
  # 映射到docs的路径
  path: /hooks/useRequest
---

# 自动请求

## 基本用法

useRequest 只需要提供一个异步请求接口即可使用该功能，
会返回 loading，data 值，通过 loading 的 true or false
表示 data 是否请求成功

<demo src="./demo.vue"
  language="vue"
  title="基本用法"
  desc="点击切换。">
</demo>
