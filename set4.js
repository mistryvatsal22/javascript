// prob1
let str = "Vat\""
console.log(str)

// prob2
const sentence = 'the quick brown fox jumps over the lazy dog.'
const word = 'FFox2';
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in tje sentence`);

// prob3
console.log(word.toLowerCase())
// PROB 4
let str2 = "please give rs 1000"
let amount = str2.slice("please give rs".length)
console.log(amount)
console.log(typeof amount)

// prob5 
let fr="deepika"
fr[3]="R"
console.log(fr)
// fr is not ChannelMergerNode, beacause string is immutable