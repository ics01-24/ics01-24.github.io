interface LabPreset {
  /** Function body to tidy up lc3Core for test and return the expected result */
  testCode: string
  /** Function body to get the actual result after run a testcase */
  ansCode: string
  /** Testcases seperated by comma */
  testCases: string
}

const labs: Record<string, LabPreset> = {
  lab1: {
    testCode: `
let [number, id] = testcase.split(':').map(Number)
lc3.memory[0x3100] = number
let mask = 1
let ans  = 0
let bit  = 16
if (number % 2 == 0) {
  number = ~number + 1
}
while (bit--) {
  if (!(number & mask)) {
    ans++
  }
  mask = mask + mask
}
return [id % 10, ans + (id % 10)]`,
    ansCode: 'return [lc3.memory[0x3101], lc3.memory[0x3102]]',
    testCases: '5:12345678, 100:12345678',
  },
  lab2: {
    testCode: `
let [n] = testcase.split(':').map(Number)
lc3.memory[0x3102] = n
let f = 3
let d = 1
while (--n) {
  f = 2 * (f + d) % 4096
  if (f % 8 == 0 | f % 10 == 8) {
    d = -d
  }
}
return f`,
    ansCode: 'return lc3.memory[0x3103]',
    testCases: '1, 2, 3, 4',
  },
  lab3: {
    testCode: `
let [str1, str2] = testcase.split(':')
for (let i = 0; i < str1.length; i++) {
  lc3.memory[0x3100 + i] = str1.charCodeAt(i);
}
for (let i = 0; i < str2.length; i++) {
  lc3.memory[0x3200 + i] = str2.charCodeAt(i);
}
for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
  if (str1.charCodeAt(i) != str2.charCodeAt(i)) {
    return str1.charCodeAt(i) - str2.charCodeAt(i);
  }
}
if (str1.length < str2.length) {
  return -str2.charCodeAt(str1.length);
} else if (str1.length > str2.length) {
  return str1.charCodeAt(str2.length);
} else {
  return 0;
}`,
    ansCode: `
if (lc3.memory[0x3300] > 32767) {
  return lc3.memory[0x3300] - 65536;
} else {
  return lc3.memory[0x3300];
}`,
    testCases: 'DsTAs:DstA, DsTAs:DsTA',
  },
  lab4: {
    testCode: `
let n = Number(testcase);
lc3.memory[0x3100] = n;
let arr = [];

function f(n, m) {
  if (n == 0) {
    return m;
  } 
  if (n == 1) {
    arr.push(m | 1);
    return m | 1;
  }
  let s = f(n - 2, m) | (1 << (n - 1));
  arr.push(s);
  return f(n - 1, g(n - 2, s));
}

function g(n, m) {
  if (n == 0) {
    return m;
  }
  if (n == 1) {
    arr.push(m & ~1);
    return m & -2;
  }
  let s = f(n - 2, g(n - 1, m)) & ~(1 << (n - 1));
  arr.push(s);
  return g(n - 2, s);
}

f(n, 0);
return arr;
`,
    ansCode: `
let arr = [];
let i = 0x3101;
while (lc3.memory[i] != 0) {
  arr.push(lc3.memory[i]);
  i++;
}
return arr;
`,
    testCases: '3',
  },
  自定义: {
    testCode: '',
    ansCode: '',
    testCases: '',
  },
}

export const presets = Object.keys(labs)

export function getPreset(lab: string) {
  return labs[lab]
}
