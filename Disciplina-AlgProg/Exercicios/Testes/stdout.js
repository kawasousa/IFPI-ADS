import { cursorTo } from "readline";
console.clear()

let cus = 0
const text = `*`
let i = (process.stdout.rows)
let c = (process.stdout.columns)

setInterval(() => {
    cursorTo(process.stdout, 0, i);
    process.stdout.write(text);
    i++
}, 1000);
