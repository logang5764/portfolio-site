// Change "greeting" text based upon hour of the day
const greeting = document.querySelector(".greeting h1");
const hours = new Date().getHours();

if (hours < 12) {
  greeting.innerHTML = "Good Morning";
} else if (hours < 18) {
  greeting.innerHTML = "Good Afternoon";
} else {
  greeting.innerHTML = "Good Evening";
}