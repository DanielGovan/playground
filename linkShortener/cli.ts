import {
  bgGreen,
  red,
  yellow,
  brightBlack,
  gray,
} from "jsr:@std/internal@^1.0.6/styles";
import { parseArgs } from "jsr:@std/cli/parse-args";
import { toKebabCase, toSnakeCase } from "jsr:@std/text";

const flags = parseArgs(Deno.args, {
  boolean: ["snake", "kebab"],
  string: ["text"],
  default: { text: "Hi Mom" },
});

// console.log(Deno.args);

const age = prompt("How old are you?");

if (parseInt(age!) < 21) {
  console.log(red("Too young!"));
  Deno.exit();
}

console.log();
console.log(bgGreen("ACCESS GRANTED"));
console.log();

const shouldProceed = confirm("Wait, r u sure?");
if (!shouldProceed) {
  console.log(red("Terminated"));
  Deno.exit();
}

console.log();
console.log(yellow(flags.text.toUpperCase()));
flags.kebab && console.log(brightBlack(toKebabCase(flags.text)));
flags.snake && console.log(gray(toSnakeCase(flags.text)));
