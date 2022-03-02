$(document).ready(function(){
  
    //Movies Data 
    const adamMovies = [
      "Shin Godzilla",
      "The Dark Knight Trilogy ",
      "Lord of The Rings",
      "Starwars",
    ];
    
    let mLen = adamMovies.length;s
    let text = "<ul>";
    for (let i = 0; i < mLen; i++) {
      text += "<li>" + adamMovies[i] + "</li>";
    }
    text += "</ul>";
    
    document.getElementById("movies").innerHTML = text;
    
    //Game Data
    const adamGames = [
        "Elden Ring",
        "Halo 3",
        "Pokemon Fire Red/Leaf Green",
        "Dark Souls 3"
      ];
      
      let gLen = adamGames.length;
      let text1 = "<ul>";
      for (let i = 0; i < gLen; i++) {
        text1 += "<li>" + adamGames[i] + "</li>";
      }
      text1 += "</ul>";
      
      document.getElementById("games").innerHTML = text1;
    
      //Show Data
      const adamHobbies = [
          "Hiking",
          "Kayaking",
          "Photography",
          "Gaming"
      ];
      
      let sLen = adamHobbies.length;
      let text2 = "<ul>";
      for (let i = 0; i < sLen; i++) {
        text2 += "<li>" + adamHobbies[i] + "</li>";
      }
      text2 += "</ul>";
      
      document.getElementById("hobbies").innerHTML = text2;
    
    });