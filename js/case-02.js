let arrays = ["red", "green", "blue", "yellow", "pink", "hotpink"];
setInterval(()=>{
    let last_value=arrays.pop();
    arrays.unshift(last_value);
    console.log(arrays);

    document.getElementById("box1").style.backgroundColor = arrays[0];
    document.getElementById("box2").style.backgroundColor = arrays[1]
    document.getElementById("box3").style.backgroundColor = arrays[2]
    document.getElementById("box4").style.backgroundColor = arrays[3]
    document.getElementById("box5").style.backgroundColor = arrays[4]
    document.getElementById("box6").style.backgroundColor = arrays[5];
},1000);