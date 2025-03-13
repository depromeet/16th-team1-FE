const throttle = <T extends unknown[]>(callback: (...args: T) => void, ms: number) => {
  let isThrottling = false;
  return (...args: T) => {
    if (isThrottling) return;
    isThrottling = true;
    setTimeout(() => {
      callback(...args);
      isThrottling = false;
    }, ms);
  };
};

export default throttle;
