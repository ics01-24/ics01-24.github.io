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
lc3.r[0] = number
const secret = parseInt(id.toString().split("").map(c => {
    if ("13579".includes(c)) return "1"     
    else return "0" 
}).join(""),2);
return (number ^ secret) & 0xffff`,
    ansCode: 'return lc3.r[3]',
    testCases: '194:12345678, 100:12345678',
  },
  lab2: {
    testCode: `
let [n] = testcase.split(':').map(Number)
lc3.memory[0x3100] = n
var k = 0
var i = n
while (i != 1 || k == 0) {
    k++
    if ((i % 2)==0) {
        i = i / 2
    }
    else{
        i = 3 * i + 1
    }
}
return k`,
    ansCode: 'return lc3.memory[0x3101]',
    testCases: '6, 16, 26, 36, 46',
  },
  lab3: {
    testCode: `
let [str,n] = testcase.split(':')
lc3.memory[0x3100] = parseInt(n)
for (let i = 0; i < str.length; i++) {
  lc3.memory[0x3101 + i] = str.charCodeAt(i);
}
var i = 0
var j = n - 1
while(i <= j){
  if(str[i] == str[j]){
    i++
    j--
  }
  else return 0
} 
return 1`,
    ansCode: `
return lc3.memory[0x3200]`,
    testCases: 'abcba:5, aBaDCDEDCDaBa:13, aBaDCDEfDCDaBa:14',
  },
  lab4: {
    testCode: `
let n = Number(testcase)
lc3.memory[0x3100] = n
let earnArray = new Array(100).fill(-1);    // 假设最大n为100，数组初始化为-1
let spendArray = new Array(100).fill(-1);
let savingsArray = new Array(100).fill(-1);

// earn 函数
function earn(n) {
  if (earnArray[n] !== -1) {
    return earnArray[n];
  }
  if (n === 0) {
    earnArray[n] = 6;
  } else {
    earnArray[n] = earn(n - 1) * 2;
  }
  return earnArray[n];
}

// spend 函数
function spend(n) {
  if (spendArray[n] !== -1) {
    return spendArray[n];
  }
  if (n === 0) {
    spendArray[n] = 2;
  } else if (spend(n - 1) >= earn(n - 1)) {
    spendArray[n] = 2;
  } else {
    spendArray[n] = spend(n - 1) * 4;
  }
  return spendArray[n];
}

// savings 函数
function savings(n) {
  if (savingsArray[n] !== -1) {
    return savingsArray[n];
  }
  if (n === 0) {
    savingsArray[n] = 10;
  } else {
    savingsArray[n] = savings(n - 1) + earn(n - 1) - spend(n - 1);
  }
  return savingsArray[n];
}
return savings(n)
`,
    ansCode: `
return lc3.memory[0x3200]
`,
    testCases: '5,6,7,8,9,10',
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
