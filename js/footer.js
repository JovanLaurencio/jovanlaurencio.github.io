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
	"Grit is passion and perseverance for very long-term goals... And working really hard to make that future a reality. - Angela Duckworth",
	"When you see only problems, you're not seeing clearly. - Phil Knight",
	"Opportunity lies in the place where the complaints are. - Jack Ma",
	"Listen with empathy and overcommunicate with transparency. - Howard Schultz",
	"Uncurious people do not lead examined lives, they cannot see causes that lie deeper than the surface - Yvon Chouinard"
//	"This is random cool fact #6.",
//	"This is random cool fact #7.",
//	"This is random cool fact #8."
]
function oneCoolFact() {
  var myFact = facts[Math.floor(Math.random()*facts.length)]
  document.getElementById('cool-fact').innerHTML = myFact;
}

//
//http://jsfiddle.net/apaul34208/ZyKar/3/
//
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 800) {
        $('#skills-btn').fadeIn();
    } else {
        $('#skills-btn').fadeOut();
    }

});

peepsOnSite();
oneCoolFact();