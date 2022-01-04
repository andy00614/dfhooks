import { useStep } from './index';

describe('useStep', () => {
  test('common use', () => {
    const { currentStep, next, back, reset } = useStep([
      'stepA',
      'stepB',
      'stepC',
      'stepD',
    ]);
    expect(currentStep.value).toBe('stepA');
    next();
    expect(currentStep.value).toBe('stepB');
    next();
    next();
    expect(currentStep.value).toBe('stepD');
    back();
    expect(currentStep.value).toBe('stepCb');
    back();
    back();
    expect(currentStep.value).toBe('stepA');
    next();
    reset();
    expect(currentStep.value).toBe('stepA');
  });
});
