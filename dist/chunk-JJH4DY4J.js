import {
  prompts
} from "./chunk-A6ZXUHMV.js";
import {
  base_command_default
} from "./chunk-HW46P6ZB.js";
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
//# sourceMappingURL=chunk-JJH4DY4J.js.map
