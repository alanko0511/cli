import {
  versionService
} from "./chunk-DGB5YRT4.js";
import {
  base_command_default
} from "./chunk-HW46P6ZB.js";
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
//# sourceMappingURL=chunk-6RBSVHAS.js.map
