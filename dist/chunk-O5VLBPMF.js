import {
  versionService
} from "./chunk-Q7J45LZL.js";
import {
  base_command_default
} from "./chunk-ITXHWLVL.js";
import {
  init_cjs_shims
} from "./chunk-PKR7KJ6P.js";

// src/cli/commands/version.ts
init_cjs_shims();
var Version = class extends base_command_default {
  static {
    this.description = "Shopify CLI version currently installed.";
  }
  async run() {
    await versionService();
  }
};

export {
  Version
};
//# sourceMappingURL=chunk-O5VLBPMF.js.map
