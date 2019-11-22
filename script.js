// function MathFact(operand1,operand2)
// {
//   this.nameFactor= operand2;
//   this.nameSet=operand1; 
// }
// I am not sure how to do this.   It will come to me ;)   
// don't have separate images.   Display that many groups :P   





var factNum=2;// the starting number to be multiplied by; the 'answer'
var factSet=2;  // the facts you're practicing:   the twos for this.  this is arbitrary right now; I'll figure out how to make this happen in proper sequence later. 
//A1.innerHTML=factSet + " x " + factNum ;  
var input = document.getElementById("factor");
input.addEventListener("keyup", function(event)
 {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("check1").click();
  }
})
var input2 = document.getElementById("multAnswer");
input2.addEventListener("keyup", function(event)
 {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("check2").click();
  }
})


function newFact()
{
  p1.innerHTML="fact number is: " + factNum;
 
}
 
function checkName(picNum)
{
var b = factor.value;

if (b=="")
{
  feedback.innerHTML="please enter an answer";

}
else if (b==factNum)
{

  feedback.innerHTML="awesome!  That's the right second factor!"
 document.getElementById("A1").style.display = 'inline';
 document.getElementById("check2").style.display = 'inline';
 
 check1.disabled="true";
 
}
else
{
  feedback.innerHTML="Check your entry; it doesn't seem to be right. I'm just a computer, though..."
}

}
function checkAnswer()
{
  feedback.innerHTML="i clicked";
  var c = multAnswer.value; 
  if (c == factNum*factSet)
  {
    feedback.innerHTML="yippee!";
    // go to the next one.   
  }
// check it and also put in the other space "2 x N = "
}
function createMultImage()
{
  let multPicHTML="";

  for (let num=1; num<=factNum; num++)
  {multPicHTML +='<img src= images/2socksIcon.png  tableValue="1" alt="1 pair of 2 socks" style="max-width:100%;max-height:100%;">'
  
  }
  multPic.innerHTML=multPicHTML;
//  let multPicHTML='<img src= images/2socksIcon.png  tableValue="1" alt="1 pair of 2 socks" style="max-width:100%;max-height:100%;">'

// multPic.innerHTML=multPicHTML;
// the above gives me the two pairs of socks :) :) 
}
createMultImage();

newFact();
// Here we will have a function to figure out *what* the answers are becuase 
// we will have different scenarios w/ this setup perhaps. 
// no, silly you:   MAKE the answers.  The same way you did the questions in the other one!!!   ... and ... make the facts that way, too.   it will be more consistent.   Have a fact with operands.   OBJECT MY DEAR OBJECT

