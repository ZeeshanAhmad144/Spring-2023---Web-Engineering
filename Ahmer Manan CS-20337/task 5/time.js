function convertedTime() {
  let time = document.getElementById("time-input").value.toString();

  let split = time.split(":");
  let response = [];
  let hour = 0;

  if (split[split.length - 1].match("PM")) {
    if (parseInt(split[0]) < 12) {
      hour = parseInt(parseInt(split[0]) + 12);
      response.push(hour);
    } else {
      hour = split[0];
      response.push(hour);
    }
  } else if (split[split.length - 1].match("AM")) {
    if (parseInt(split[0]) == 12) {
      hour = parseInt(parseInt(parseInt(split[0])) - 12);
      response.push(hour);
    } else {
      hour = parseInt(parseInt(split[0]));
      response.push(hour);
    }
  }

  response.push(split[1]);
  response.push(parseInt(split[2]));
  for (let i = 0; i < response.length; i++) {
    response[i] = response[i].toString().padStart(2, "0");
  }

  let convertTime = response.join(":");
  document.getElementById("converted-time").innerText =convertTime;
}