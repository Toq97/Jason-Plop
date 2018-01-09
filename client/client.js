/*** GET ***/
// instantiate a new request
function getFromLuke() {
    var getRequest = new XMLHttpRequest();

    // add event listeners
    getRequest.addEventListener('load', function() {
<<<<<<< HEAD
        /** se parso questo mi da object object**/
        /** se lo vedi non parsato vedi che c'e il json giusto**/
        console.log(getRequest.responseText);
        var lukeData = JSON.parse(getRequest.responseText);
        console.log(lukeData)
        document.getElementById('luketext').innerHTML = lukeData.nome;
=======
    var lukeData = JSON.parse(getRequest.responseText);
    document.getElementById('luketext').innerHTML = lukeData.getJson.nome;
>>>>>>> be79ebd74961b6a5c0e70f48e144da1999013b28
    });
    getRequest.open('GET', 'http://localhost:3000/json/luke', true);
    getRequest.setRequestHeader('Content-type', 'application/json');
    getRequest.send();
}

function getFromLeia() {
    var getRequest = new XMLHttpRequest();
    // add event listeners
    getRequest.addEventListener('load', function() {
    document.getElementById('leilatext').innerHTML = getRequest.responseText;
});

    getRequest.open('GET', 'http://localhost:3000/json/leia', true);

    getRequest.setRequestHeader('Content-type', 'application/json');
    getRequest.send();
}


function getFromHan() {
    var getRequest = new XMLHttpRequest();

    // add event listeners
    getRequest.addEventListener('load', function() {
        // transform a string into a usable object
        console.log(getRequest.responseText);
           document.getElementById('hantext').innerHTML = getRequest.responseText;
    });

    getRequest.open('GET', 'http://localhost:3000/json/han', true);

    getRequest.setRequestHeader('Content-type', 'application/json');
    getRequest.send();
}

/*** PUT  ***/

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
          "missioni effetuate":["Yoda mission","Morte nera mission","Darth Vader mission"],
          "Missioni da effettuare":["insegnamento jedi","Potenziamento della forza"]
        })
    );
}


/*** POST  ***/
function postToJson() {
    //console.log(createPostObj());
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

var nomePostInput = document.getElementById('nome-post');
var cognomePostInput = document.getElementById('cognome-post');
var missione1PostInput = document.getElementById('missione1-post');
var missione2PostInput = document.getElementById('missione2-post');
var missione3PostInput = document.getElementById('missione3-post');
var compiuta1PostInput = document.getElementById('compiuta1-post');
var compiuta2PostInput = document.getElementById('compiuta2-post');
var compiuta3PostInput = document.getElementById('compiuta3-post');

function createPostObj() {
    return {
        nome: nomePostInput.value,
        cognome: cognomePostInput.value,
        missioniDaEffettuare: [missione1PostInput.value, missione2PostInput.value, missione3PostInput.value],
        missioniEffettuate: [compiuta1PostInput.value,compiuta2PostInput.value, compiuta3PostInput.value]
    };
}


var getLukeBtn = document.getElementById('get-Luke');
var getHanBtn = document.getElementById('get-Han');
var getLeiaBtn = document.getElementById('get-Leila');
//var getGoodbyeBtn = document.getElementById('get-goodbye');
//var putLocalhostBtn = document.getElementById('put-localhost');
var putLukeBtn = document.getElementById('put-luke');

var postBtn = document.getElementById('post-btn');

getLukeBtn.addEventListener('click', getFromLuke);
getLeiaBtn.addEventListener('click', getFromLeia);
getHanBtn.addEventListener('click', getFromHan);
//getLukeBtn.addEventListener('click', getFromOne('luke'));
//getGoodbyeBtn.addEventListener('click', getFromGoodBye);
//putLocalhostBtn.addEventListener('click', putToLocalhost);
putLukeBtn.addEventListener('click', putToLuke);

postBtn.addEventListener('click', postToJson);
