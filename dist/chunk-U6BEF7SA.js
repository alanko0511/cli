import {
  staticService
} from "./chunk-LQ6XHRJ7.js";
import {
  base_command_default
} from "./chunk-HW46P6ZB.js";
import {
  init_cjs_shims
} from "./chunk-PKR7KJ6P.js";

// src/cli/commands/kitchen-sink/static.ts
init_cjs_shims();
var KitchenSinkStatic = class extends base_command_default {
  static {
    this.description = "View the UI kit components that display static output";
  }
  static {
    this.hidden = !0;
  }
  async run() {
    await staticService();
  }
};

export {
  KitchenSinkStatic
};
//# sourceMappingURL=chunk-U6BEF7SA.js.map
