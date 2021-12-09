document.addEventListener("DOMContentLoaded", getData);

//Con .then().catch()
/* function getData(){
  fetch('https://picsum.photos/v2/list')
  .then( res => {
    return res.json();
  })
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err))
} */

//Con Async Await
async function getData() {
  try {
    const res = await fetch("https://picsum.photos/v2/list");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
