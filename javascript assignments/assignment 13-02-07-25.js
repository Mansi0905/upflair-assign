//  STRING QUESTIONS

// function revSt(s) {
//     let r = "";
//     for (let i = s.length - 1; i >= 0; i--) {
//         r += s[i];
//     }
//     console.log("Reversed:", r);
// }

// function palChe(s) {
//     let l = s.toLowerCase();
//     let r = "";
//     for (let i = l.length - 1; i >= 0; i--) {
//         r += l[i];
//     }
//     let res = l === r;
//     console.log("Is Palindrome:", res);
// }

// function vowelCou(s) {
//     let c = 0;
//     let v = "aeiouAEIOU";
//     for (let i = 0; i < s.length; i++) {
//         if (v.indexOf(s[i]) !== -1) {
//             c++;
//         }
//     }
//     console.log("Vowel Count:", c);
// }

// function capWord(s) {
//     let w = s.split(" ");
//     for (let i = 0; i < w.length; i++) {
//         if (w[i].length > 0) {
//             w[i] = w[i][0].toUpperCase() + w[i].slice(1);
//         }
//     }
//     let res = w.join(" ");
//     console.log("Capitalized:", res);
// }

// function charFre(s) {
//     let f = {};
//     for (let i = 0; i < s.length; i++) {
//         let ch = s[i];
//         if (f[ch]) {
//             f[ch]++;
//         } else {
//             f[ch] = 1;
//         }
//     }
//     console.log("Character Frequency:", f);
// }

// //  ARRAY QUESTIONS

// function remDup(a) {
//     let u = [];
//     for (let i = 0; i < a.length; i++) {
//         if (u.indexOf(a[i]) === -1) {
//             u.push(a[i]);
//         }
//     }
//     console.log("Unique Array:", u);
// }

// function flatArr(a) {
//     let r = [];
//     for (let i = 0; i < a.length; i++) {
//         r = r.concat(a[i]);
//     }
//     console.log("Flattened Array:", r);
// }

// function maxMin(a) {
//     let max = a[0];
//     let min = a[0];
//     for (let i = 1; i < a.length; i++) {
//         if (a[i] > max) {
//             max = a[i];
//         }
//         if (a[i] < min) {
//             min = a[i];
//         }
//     }
//     let res = { max: max, min: min };
//     console.log("Max and Min:", res);
// }

// function even(a) {
//     let s = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] % 2 === 0) {
//             s += a[i];
//         }
//     }
//     console.log("Sum of Even Numbers:", s);
// }

function group(a) {
    let g = {};
    for (let i = 0; i < a.length; i++) {
        let t = typeof a[i];
        if (g[t]) {
            g[t].push(a[i]);
        } else {
            g[t] = [a[i]];
        }
    }
    console.log("Grouped by Type:", g);
}

