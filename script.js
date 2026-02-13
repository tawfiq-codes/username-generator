function generate(){

let name = document.getElementById("name").value;

if(name===""){
  alert("Please enter your name");
  return;
}

let mode = document.getElementById("mode").value;
let result = document.getElementById("result");

result.innerHTML = "";

let tech = ["AI","Byte","Code","Neuro","Quantum"];
let gaming = ["Slayer","Hunter","Shadow","Blaze"];
let pro = ["Consulting","Solutions","Labs","Tech"];

let pool;

if(mode==="tech"){
  pool = tech;
}
else if(mode==="gaming"){
  pool = gaming;
}
else{
  pool = pro;
}

for(let i=0;i<5;i++){
  let randomWord = pool[Math.floor(Math.random()*pool.length)];

  let li = document.createElement("li");
  li.textContent = name + randomWord;

  result.appendChild(li);
}

}
