var _a;
import { cliInstallCommand } from '@shopify/cli-kit/node/upgrade';
import Command from '@shopify/cli-kit/node/base-command';
import { renderInfo } from '@shopify/cli-kit/node/ui';
class Upgrade extends Command {
    async run() {
        renderInfo({
            body: [`To upgrade Shopify CLI use your package manager.\n`, `Example:`, { command: cliInstallCommand() }],
        });
    }
}
_a = Upgrade;
Upgrade.summary = 'Shows details on how to upgrade Shopify CLI.';
Upgrade.descriptionWithMarkdown = 'Shows details on how to upgrade Shopify CLI.';
Upgrade.description = _a.descriptionWithoutMarkdown();
export default Upgrade;
//# sourceMappingURL=upgrade.js.map