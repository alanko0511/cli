import {
  openURL
} from "./chunk-55O4MPI7.js";
import {
  init_cjs_shims
} from "./chunk-PKR7KJ6P.js";

// src/cli/services/commands/search.ts
init_cjs_shims();
async function searchService(query) {
  let searchParams = new URLSearchParams();
  searchParams.append("search", query ?? ""), await openURL(`https://shopify.dev?${searchParams.toString()}`);
}

export {
  searchService
};
//# sourceMappingURL=chunk-CZCZAYGU.js.map
