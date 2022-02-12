let sentence = [
  "You can do it!",
  "Yes you can",
  "You're killing it!",
  "You're doing great!",
  "You are an elegant tulip standing tall in a sea of beauty",
  "If your mom isn't proud of you, know mine is",
  "Oh my goodness, you've come so far!",
  "They should put you on a Wheates box!",
  "Did you ever know that you're my hero?",
  "Studies show that 100% of people want to be just like you",
  "If the entire world was made of people with your brains, we would have already figured out how to talk with cats",
  "Charles what now? You've got this much done?",
  "Those fools at your high school reunion are going to be so jealous.",
  "You're doing way better than Becky!",
  "Be the person your dog thinks you are!",
  "If I was real I'd give you a big hug!",
  "The Emporer Protects",
  "You're doing an amazing job!",
  "Be proud of yourself! You've come so far!",
  "If Becky can do it, so can you.",
  "You miss 100% of the shots you don't take - Abraham Lincoln",
  "Shoot for the moon, even if you miss you'll land among the stars",
  "The sooner you get this done the sooner you can go back to watching Gilmore Girls.",
  "The sooner you get this done the sooner you can go back to watching Downton Abbey.",
  "They're going to write a book about you, lets hope its not in the crime genre!",
];

let pos1 = sentence[Math.floor(Math.random() * sentence.length)];

const button = document.querySelector("#button");

const generate = () => {
  button.addEventListener("click", () => {
    document.getElementById("yes").textContent = pos1;
  });
};
generate();
function refreshPage() {
  window.location.reload();
}

// document.getElementById("yes").textContent = "This text is different!";
