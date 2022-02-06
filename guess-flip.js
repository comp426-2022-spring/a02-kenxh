import { flipACoin } from "./modules/coin.mjs";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const args = require('minimist')(process.argv.slice(2));

if (!args.call) {
    console.log(
        "Error: no input.",
        "\nUsage: node guess-flip.js --call=[heads|tails]"
    )
} else if (args.call != "tails" && args.call != "heads") {
    console.log(
        "Error: incorrect input.",
        "\nUsage: node guess-flip.js --call=[heads|tails]"
    )
}
else {
    console.log(flipACoin(args.call));
}

