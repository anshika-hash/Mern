const href= "http://api.openweathermap.org/data/2.5/weather?q=muzaffarnagar&appid=2f47517e48c8c50028dd02a51e5cfd7f";

async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    //myDisplay(myText);
  }

  getText(href);
