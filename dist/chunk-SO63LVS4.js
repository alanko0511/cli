import {
  prompts
} from "./chunk-T3O7AR22.js";
import {
  base_command_default
} from "./chunk-BPC73D3P.js";
import {
  init_cjs_shims
} from "./chunk-PKR7KJ6P.js";

// src/cli/commands/kitchen-sink/prompts.ts
init_cjs_shims();
var KitchenSinkPrompts = class extends base_command_default {
  static {
    this.description = "View the UI kit components prompts";
  }
  static {
    this.hidden = !0;
  }
  async run() {
    await prompts();
  }
};

export {
  KitchenSinkPrompts
};
//# sourceMappingURL=chunk-SO63LVS4.js.map
