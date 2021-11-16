const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const storyText =
  "Hacía 94 farenheit afuera, así que: insertx: salí a caminar. Cuando llegaron a: inserty :, miraron con horror por unos momentos, luego: insertz :. Bob vio todo, pero no se sorprendió: insertx: pesa 300 libras y era un día caluroso";
const insertX = ["Willy Wonka", "Big Daddy", "Papá Noel"];
const insertY = ["el comedor de beneficencia", "Disneyland", "la Casa Blanca"];
const insertZ = [
  "quemado espontáneamente",
  "derretido en un charco en la acera",
  "convertido en una babosa y arrastrándose",
];

randomize.addEventListener("click", result);

function result() {
  let newStory = storyText;
  let xitem = randomValueFromArray(insertX);
  let yitem = randomValueFromArray(insertY);
  let zitem = randomValueFromArray(insertZ);

  newStory = newStory.replace(": insertx:", xitem);
  newStory = newStory.replace(": inserty:", yitem);
  newStory = newStory.replace(": insertz:", zitem);
  newStory = newStory.replace(": insertx:", xitem);

  if (customName.value !== "") {
    let name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    let weight = Math.round(300);
    let temperature = Math.round(94);
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 farenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
