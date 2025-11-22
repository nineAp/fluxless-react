export const asyncify = <F extends (...args: any[]) => any>(fn: F) => {
  return async (...args: Parameters<F>) => {
    return await new Promise((resolve, reject) => {
      setImmediate(() => {
        try {
          resolve(fn(...args));
        } catch (err) {
          reject(err);
        }
      });
    });
  };
};
