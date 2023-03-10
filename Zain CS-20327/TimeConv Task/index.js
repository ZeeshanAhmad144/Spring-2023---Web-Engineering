function timeConv() {
  let s = document.getElementById("time-input").value.toString();

  const arr = s.split(":");
  const res = [];
  let hr = 0;

  if (arr[arr.length - 1].match("PM")) {
    if (parseInt(arr[0]) < 12) {
      hr = parseInt(parseInt(arr[0]) + 12);
      res.push(hr);
    } else {
      hr = arr[0];
      res.push(hr);
    }
  } else if (arr[arr.length - 1].match("AM")) {
    if (parseInt(arr[0]) == 12) {
      hr = parseInt(parseInt(parseInt(arr[0])) - 12);
      res.push(hr);
    } else {
      hr = parseInt(parseInt(arr[0]));
      res.push(hr);
    }
  }

  res.push(arr[1]);
  res.push(parseInt(arr[2]));
  for (let i = 0; i < res.length; i++) {
    res[i] = res[i].toString().padStart(2, "0");
  }

  const convertedTime = res.join(":");
  document.getElementById("converted-time").innerText = convertedTime;
}
