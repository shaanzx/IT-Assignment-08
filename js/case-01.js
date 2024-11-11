let array = ["A", "B", "C", "D", "E", "F"];
setInterval(() => {
  let last_value = array.pop();
  array.unshift(last_value);
  console.log(array);

  document.getElementsByTagName("h1")[0].innerText = array[0];
  document.getElementsByTagName("h1")[1].innerText = array[1];
  document.getElementsByTagName("h1")[2].innerText = array[2];
  document.getElementsByTagName("h1")[3].innerText = array[3];
  document.getElementsByTagName("h1")[4].innerText = array[4];
  document.getElementsByTagName("h1")[5].innerText = array[5];
}, 2000);
