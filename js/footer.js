/*
 * How many people are viewing your site right now?
 */
function peepsOnSite() {
  var people = Math.floor(Math.random() * ((199-101)+1) + 101);
  document.getElementById('people').innerHTML = people;
}

/*
 * How many people are viewing your site right now?
 */

var facts = [
	"This is random cool fact #1.",
	"This is random cool fact #2.",
	"This is random cool fact #3.",
	"This is random cool fact #4.",
	"This is random cool fact #5.",
	"This is random cool fact #6.",
	"This is random cool fact #7.",
	"This is random cool fact #8."
]
function oneCoolFact() {
  var myFact = facts[Math.floor(Math.random()*facts.length)]
  document.getElementById('cool-fact').innerHTML = myFact;
}


peepsOnSite();
oneCoolFact();