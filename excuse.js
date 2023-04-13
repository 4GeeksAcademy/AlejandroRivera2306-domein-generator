let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

pronoun.forEach((pronounItem) => {
  adj.forEach((adjItem) => {
    noun.forEach((nounItem) => {
      let result = `${pronounItem} ${adjItem} ${nounItem}`;
      console.log(result);
    });
  });
});