import {
  Version
} from "../../chunk-KY4W7YYP.js";
import {
  versionService
} from "../../chunk-GQJWRG3R.js";
import {
  describe,
  globalExpect,
  test,
  vi
} from "../../chunk-W5G2YPO2.js";
import "../../chunk-BPC73D3P.js";
import "../../chunk-WWR5GV7Z.js";
import "../../chunk-SHWOPMLQ.js";
import "../../chunk-YZAKRLKS.js";
import "../../chunk-OWJEOMCQ.js";
import "../../chunk-REPD2IEO.js";
import "../../chunk-AG6LRS7U.js";
import "../../chunk-25IMI7TH.js";
import "../../chunk-FYGQPHYH.js";
import "../../chunk-ETLGRSYP.js";
import "../../chunk-PHHK7BVI.js";
import "../../chunk-75LV6AQS.js";
import "../../chunk-EG6MBBEN.js";
import "../../chunk-3FBDJEGD.js";
import "../../chunk-UMUTXITN.js";
import "../../chunk-HMDWNGIV.js";
import "../../chunk-G5R6YD27.js";
import "../../chunk-G2ZZKGSV.js";
import "../../chunk-UV5N2VL7.js";
import "../../chunk-XE5EOEBL.js";
import "../../chunk-B5EXYCV3.js";
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
