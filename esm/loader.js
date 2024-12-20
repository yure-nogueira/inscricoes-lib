import { b as bootstrapLazy } from './index-d5a71da1.js';
export { s as setNonce } from './index-d5a71da1.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["tp-input",[[1,"tp-input",{"label":[513],"type":[513],"placeholder":[513],"outlined":[516],"startValue":[8,"start-value"]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map