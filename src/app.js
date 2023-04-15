/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  pronoun.forEach(pronounItem => {
    adj.forEach(adjItem => {
      noun.forEach(nounItem => {
        let result = `${pronounItem}${adjItem}${nounItem}.com`;
        console.log(result);
      });
    });
  });
};
