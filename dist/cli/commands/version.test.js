import {
  Version
} from "../../chunk-6RBSVHAS.js";
import {
  versionService
} from "../../chunk-DGB5YRT4.js";
import {
  describe,
  globalExpect,
  test,
  vi
} from "../../chunk-4MSYMXAX.js";
import "../../chunk-HW46P6ZB.js";
import "../../chunk-QO2C5AXB.js";
import "../../chunk-SHWOPMLQ.js";
import "../../chunk-3EM5OE4I.js";
import "../../chunk-FNPB6SK6.js";
import "../../chunk-N3JBVPSU.js";
import "../../chunk-YZSZ6Z7R.js";
import "../../chunk-XD3LXUGW.js";
import "../../chunk-NJC44GNP.js";
import "../../chunk-SQNWVF3V.js";
import "../../chunk-TBTKQIPA.js";
import "../../chunk-X2YIODUW.js";
import "../../chunk-UMUTXITN.js";
import "../../chunk-6FH6AJI5.js";
import "../../chunk-Q2H6D2MH.js";
import "../../chunk-G2ZZKGSV.js";
import "../../chunk-6ONJEX7Y.js";
import "../../chunk-UV5N2VL7.js";
import "../../chunk-XE5EOEBL.js";
import "../../chunk-EG6MBBEN.js";
import {
  init_cjs_shims
} from "../../chunk-PKR7KJ6P.js";

// src/cli/commands/version.test.ts
init_cjs_shims();
vi.mock("../services/commands/version.js");
describe("version command", () => {
  test("launches service", async () => {
    vi.mocked(versionService).mockResolvedValue(), await Version.run([], import.meta.url), globalExpect(versionService).toHaveBeenCalled();
  });
});
//# sourceMappingURL=version.test.js.map
