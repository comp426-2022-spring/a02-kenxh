import { coinFlips, countFlips } from "./modules/coin.mjs";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const args = require('minimist')(process.argv.slice(2));

let flips = coinFlips(args.number)
console.log(args.number)
console.log(flips)
console.log(countFlips(flips))