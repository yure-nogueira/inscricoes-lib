'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2d085dac.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.23.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('inscricoes.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["tp-input.cjs",[[1,"tp-input",{"label":[513],"type":[513],"placeholder":[513],"outlined":[516],"startValue":[8,"start-value"]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=inscricoes.cjs.js.map