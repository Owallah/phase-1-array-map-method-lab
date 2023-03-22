const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function (tutorial) {
   
    const splitSentences = tutorial.split(" ")

    for (let i = 0; i < splitSentences.length; i++) {
      splitSentences[i] = splitSentences[i].charAt(0).toUpperCase() + splitSentences[i].slice(1);
     }
  const result = splitSentences.join(" ")
  return result
  })
}

console.log(titleCased())
