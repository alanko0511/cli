import {
  KitchenSinkPrompts
} from "../../../chunk-JJH4DY4J.js";
import {
  prompts
} from "../../../chunk-A6ZXUHMV.js";
import {
  describe,
  globalExpect,
  test,
  vi
} from "../../../chunk-4MSYMXAX.js";
import "../../../chunk-HW46P6ZB.js";
import "../../../chunk-QO2C5AXB.js";
import "../../../chunk-SHWOPMLQ.js";
import "../../../chunk-3EM5OE4I.js";
import "../../../chunk-FNPB6SK6.js";
import "../../../chunk-N3JBVPSU.js";
import "../../../chunk-YZSZ6Z7R.js";
import "../../../chunk-XD3LXUGW.js";
import "../../../chunk-NJC44GNP.js";
import "../../../chunk-SQNWVF3V.js";
import "../../../chunk-TBTKQIPA.js";
import "../../../chunk-X2YIODUW.js";
import "../../../chunk-UMUTXITN.js";
import "../../../chunk-6FH6AJI5.js";
import "../../../chunk-Q2H6D2MH.js";
import "../../../chunk-G2ZZKGSV.js";
import "../../../chunk-6ONJEX7Y.js";
import "../../../chunk-UV5N2VL7.js";
import "../../../chunk-XE5EOEBL.js";
import "../../../chunk-EG6MBBEN.js";
import {
  init_cjs_shims
} from "../../../chunk-PKR7KJ6P.js";

// src/cli/commands/kitchen-sink/prompts.test.ts
init_cjs_shims();
vi.mock("../../services/kitchen-sink/prompts.js");
describe("kitchen-sink all command", () => {
  test("launches service", async () => {
    vi.mocked(prompts).mockResolvedValue(), await KitchenSinkPrompts.run([], import.meta.url), globalExpect(prompts).toHaveBeenCalled();
  });
});
//# sourceMappingURL=prompts.test.js.map
