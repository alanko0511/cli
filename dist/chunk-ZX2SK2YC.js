import {
  asyncTasks
} from "./chunk-4AXV5KE4.js";
import {
  prompts
} from "./chunk-3QNHVV5H.js";
import {
  staticService
} from "./chunk-7M2FCLB2.js";
import {
  base_command_default
} from "./chunk-ITXHWLVL.js";
import {
  init_cjs_shims
} from "./chunk-PKR7KJ6P.js";

// src/cli/commands/kitchen-sink/index.ts
init_cjs_shims();
var KitchenSinkAll = class extends base_command_default {
  static {
    this.description = "View all the available UI kit components";
  }
  static {
    this.hiddenAliases = ["kitchen-sink all"];
  }
  static {
    this.hidden = !0;
  }
  async run() {
    await staticService(), await prompts(), await asyncTasks();
  }
};

export {
  KitchenSinkAll
};
//# sourceMappingURL=chunk-ZX2SK2YC.js.map
