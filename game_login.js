function hello(){
  player1loginid = document.getElementById("player_1name").value;
  player2loginid = document.getElementById("player_2name").value;

  localStorage.setItem("player1loginid", player1loginid );
  localStorage.setItem("player2loginid", player2loginid );

  window.location = "game_page.html";
}
