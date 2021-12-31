import { useState } from './index';

test('useState test', () => {
  const [count, setCount] = useState(0);
  setCount(2);
  expect(count.value).toBe(2);
});
