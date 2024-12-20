import { p as promiseResolve, b as bootstrapLazy } from './index-d5a71da1.js';
export { s as setNonce } from './index-d5a71da1.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.23.0 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["tp-input",[[1,"tp-input",{"label":[513],"type":[513],"placeholder":[513],"outlined":[516],"startValue":[8,"start-value"]}]]]], options);
});

//# sourceMappingURL=inscricoes.js.map