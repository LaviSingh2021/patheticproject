var score = 0;

function updatescore(){
    score= score + 1 ;
    document.getElementById("Score1").innerHTML = "score : " + score ;
}

function savescore(){
    localStorage.setItem("golive" , score );                                                                                                                     
}

function nextpage(){
    window.location= "activity_2.html";
}