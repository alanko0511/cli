import {
  asyncTasks
} from "./chunk-4UCI25KJ.js";
import {
  prompts
} from "./chunk-A6ZXUHMV.js";
import {
  staticService
} from "./chunk-LQ6XHRJ7.js";
import {
  base_command_default
} from "./chunk-HW46P6ZB.js";
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
//# sourceMappingURL=chunk-BG32HBTG.js.map
