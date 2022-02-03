import {
  distinct,
  sample,
} from "https://deno.land/std@0.123.0/collections/mod.ts";
import { equal } from "https://deno.land/std@0.123.0/testing/asserts.ts";

function general_kiyoshi(phrases: string[], last_phrase: string): void {
  const stack: string[] = [];
  while (true) {
    const picked = sample(distinct(phrases));
    if (picked) {
      console.log(picked);
      stack.push(picked);
    }
    if (equal(stack.slice(-phrases.length), phrases)) {
      console.log(last_phrase);
      break;
    }
  }
}

if (equal(Deno.args, [])) {
  const zundoko = ["ズン", "ズン", "ズン", "ズン", "ドコ"];
  const kiyoshi = "キ・ヨ・シ！";
  general_kiyoshi(zundoko, kiyoshi);
} else {
  general_kiyoshi(Deno.args.slice(0, -1), Deno.args.slice(-1)[0]);
}
