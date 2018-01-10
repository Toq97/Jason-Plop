/*** GET ***/
// instantiate a new request


/**
 * [Function get from luke.json]
 * @return {[]} [print the object]
 */
function getFromLuke() {
    var getRequest = new XMLHttpRequest();
    // add event listeners
    getRequest.addEventListener('load', function() {
        var lukeData = JSON.parse(getRequest.responseText);


        document.getElementById('luketext').innerHTML = "Io sono "+lukeData.getJson.nome+" "+lukeData.getJson.cognome+" e <br>"+yediyes(lukeData.getJson.Jedi)+"<br>"+printMission(lukeData.getJson.missionieffetuate)+"<br>"+printMission2(lukeData.getJson.missionidaeffettuare);
    });
    getRequest.open('GET', 'http://localhost:3000/json/luke', true);
    getRequest.setRequestHeader('Content-type', 'application/json');
    getRequest.send();
}

/**
 * [Function get from leila.json]
 * @return {[]} [print the object]
 */
function getFromLeia() {
    var getRequest = new XMLHttpRequest();
    // add event listeners
    getRequest.addEventListener('load', function() {
      var leilaData = JSON.parse(getRequest.responseText);
      document.getElementById('leilatext').innerHTML = "Io sono "+leilaData.getJson.nome+" "+leilaData.getJson.cognome+" e <br>"+yediyes(leilaData.getJson.Jedi)+"<br>"+printMission(leilaData.getJson.missionieffetuate)+"<br>"+printMission2(leilaData.getJson.missionidaeffettuare);

});

    getRequest.open('GET', 'http://localhost:3000/json/leia', true);

    getRequest.setRequestHeader('Content-type', 'application/json');
    getRequest.send();
}

/**
 * [Function get from han.json]
 * @return {[]} [print the object]
 */
function getFromHan() {
    var getRequest = new XMLHttpRequest();

    // add event listeners
    getRequest.addEventListener('load', function() {
        // transform a string into a usable object
        var hanData = JSON.parse(getRequest.responseText);
        document.getElementById('hantext').innerHTML = "Io sono "+hanData.getJson.nome+" "+hanData.getJson.cognome+" e <br>"+yediyes(hanData.getJson.Jedi)+"<br>"+printMission(hanData.getJson.missionieffetuate)+"<br>"+printMission2(hanData.getJson.missionidaeffettuare);
    });

    getRequest.open('GET', 'http://localhost:3000/json/han', true);

    getRequest.setRequestHeader('Content-type', 'application/json');
    getRequest.send();
}

/*** PUT  ***/

/**
 * [Function put to luke.json]
 * @return {[]} [print the object in the console]
 */
function putToLuke () {
    var putRequest = new XMLHttpRequest();
    putRequest.open('PUT', 'http://localhost:3000/json/luke');
    putRequest.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    putRequest.onload = function() {
        if (putRequest.status === 200) {
            var userInfo = JSON.parse(putRequest.responseText);
        }
        console.log(putRequest.responseText);
    };

    putRequest.send(
        JSON.stringify({
          "nome":"Luke",
          "cognome":"Skywalker",
          "Jedi":"Yes",
          "missionieffetuate":["Yoda mission","Morte nera mission","Darth Vader mission"],
          "missionidaeffettuare":["insegnamento jedi","Potenziamento della forza"]
        })
    );
}


/*** POST  ***/
/**
 * [Function that create a new element with post]
 * @return {[]} [print the object]
 */
function postToJson() {
    var postRequest = new XMLHttpRequest();
    postRequest.open('POST', 'http://localhost:3000/json/');
    postRequest.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    postRequest.onload = function() {
        if (postRequest.status === 200) {
            var userInfo = JSON.parse(postRequest.responseText);
        }
        console.log(postRequest.responseText);

    };

    postRequest.send(
        JSON.stringify(createPostObj())
    );
}



/**
 * [manager the collapse panel]
 */
function managerCollapseluke(){
    document.getElementById('hantext').innerHTML = "";
    document.getElementById('leilatext').innerHTML = "";
    getFromLuke();

}
/**
 * [manager the collapse panel]
 */
function managerCollapseleila(){
    document.getElementById('hantext').innerHTML = "";
    document.getElementById('luketext').innerHTML = "";
    getFromLeia();

}
/**
 * [manager the collapse panel]
 */
function managerCollapsehan(){
    document.getElementById('leilatext').innerHTML = "";
    document.getElementById('luketext').innerHTML = "";
    getFromHan();

}

//function use for print the jedi status
function yediyes(yedi){
    if (yedi == "yes" || yedi == "Yes"){
        return "sono un Yedy.";
      }
      else {
        return "non sono un Yedy.";
      }

}


//function that print the mission
function printMission(array){
  var mission = "Le mie missioni effettuate: ";

  for (var i = 0;i<array.length;i++){

    mission=mission+"<br>- "+array[i];
  }

  return mission;
}

//function that print the mission
function printMission2(array){
  var mission = "Le mie missioni da effettuare: ";

  for (var i = 0;i<array.length;i++){

    mission=mission+"<br>- "+array[i];
  }

  return mission;
}


//take the element to the doma
var nomePostInput = document.getElementById('nome-post');
var cognomePostInput = document.getElementById('cognome-post');
var missione1PostInput = document.getElementById('missione1-post');
var missione2PostInput = document.getElementById('missione2-post');
var missione3PostInput = document.getElementById('missione3-post');
var compiuta1PostInput = document.getElementById('compiuta1-post');
var compiuta2PostInput = document.getElementById('compiuta2-post');
var compiuta3PostInput = document.getElementById('compiuta3-post');


/**
 * [create the object for the post]
 */
function createPostObj() {
    return {
        nome: nomePostInput.value,
        cognome: cognomePostInput.value,
        missioniDaEffettuare: [missione1PostInput.value, missione2PostInput.value, missione3PostInput.value],
        missioniEffettuate: [compiuta1PostInput.value,compiuta2PostInput.value, compiuta3PostInput.value]
    };
}


//take the button to the dom
var getLukeBtn = document.getElementById('get-Luke');
var getHanBtn = document.getElementById('get-Han');
var getLeiaBtn = document.getElementById('get-Leila');
var putLukeBtn = document.getElementById('put-luke');
var postBtn = document.getElementById('post-btn');




//assign the function at the buttons
getLukeBtn.addEventListener('click', managerCollapseluke);
getLeiaBtn.addEventListener('click', managerCollapseleila);
getHanBtn.addEventListener('click', managerCollapsehan);
putLukeBtn.addEventListener('click', putToLuke);
postBtn.addEventListener('click', postToJson);
