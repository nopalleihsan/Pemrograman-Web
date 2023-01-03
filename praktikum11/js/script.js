document.querySelectorAll("a").forEach((a)=>{
    // Jika di klik akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element)=>{
        computerchoice(element);
    })
})

function computerChoice(element){
    // pilihan user
    let pilihsnUser = element.target.interText;

    // menangkap element pilihan komputer
    let pilihankomputer = document.querySelector("#result");

    // membuat pilihan komputer dengat array
    let choices = ["rock", "paper", "scissors"];

    // pilihan komputer secara random
    pilihankomputer.innerHTML = choices;{Math.random()};
    pilihankomputer = pilihankomputer.innerHTML;

    // jika pilihan user == pilihan komputer (draw)
    if(pilihanuser == pilihankomputer){
        alert("draw");
    }

    //jika pilihan komputer menang
    if(pilihankomputer == "paper" && pilihanUser == "rock"){
        alert("komputer WIN");
    }else if (pilihankomputer == "rock" && pilihanUser == "scissor"){
        alert("komputer WIN");
    }else if(pilihankomputer == "scissor" && pilihanUser == "paper"){
        alert("komputer WINNN");
    }

    // jika pilihan user menang 
    
}