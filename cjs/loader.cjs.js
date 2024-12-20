'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2d085dac.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["tp-input.cjs",[[1,"tp-input",{"label":[513],"type":[513],"placeholder":[513],"outlined":[516],"startValue":[8,"start-value"]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map