/*** GET ***/
// instantiate a new request
function getFromLuke() {
    var getRequest = new XMLHttpRequest();

    // add event listeners
    getRequest.addEventListener('load', function() {
        // transform a string into a usable object
        console.log(getRequest.responseText);
         document.getElementById('luketext').innerHTML = getRequest.responseText;
    });

    getRequest.open('GET', 'http://localhost:3000/json/luke', true);

    getRequest.setRequestHeader('Content-type', 'application/json');
    getRequest.send();
}

function getFromLeia() {
    var getRequest = new XMLHttpRequest();

    // add event listeners
    getRequest.addEventListener('load', function() {
        // transform a string into a usable object
        console.log(getRequest.responseText);
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




//stessa identica chiamata, cambia solo l'url

function getFromGoodBye() {
    // instantiate a new request
    var getRequestGoodBye = new XMLHttpRequest();

    // add event listeners
    getRequestGoodBye.addEventListener('load', function() {
        // transform a string into a usable object
        console.log(getRequestGoodBye.responseText);
    });

    getRequestGoodBye.open('GET', 'http://localhost:3000/goodbye', true);

    getRequestGoodBye.setRequestHeader('Content-type', 'application/json');
    getRequestGoodBye.send();
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
          "nome":"Luke","cognome":"Skywalker","Jedi":"Yes","missioni effetuate":["Yoda mission","Morte nera mission","Darth Vader mission"], "Missioni da effettuare":["insegnamento jedi","Potenziamento della forza"]
            })
    );
}


var getLukeBtn = document.getElementById('get-Luke');
var getHanBtn = document.getElementById('get-Han');
var getLeiaBtn = document.getElementById('get-Leila');
//var getGoodbyeBtn = document.getElementById('get-goodbye');
//var putLocalhostBtn = document.getElementById('put-localhost');
var putLukeBtn = document.getElementById('put-luke');

getLukeBtn.addEventListener('click', getFromLuke);
getLeiaBtn.addEventListener('click', getFromLeia);
getHanBtn.addEventListener('click', getFromHan);
//getLukeBtn.addEventListener('click', getFromOne('luke'));
//getGoodbyeBtn.addEventListener('click', getFromGoodBye);
//putLocalhostBtn.addEventListener('click', putToLocalhost);
putLukeBtn.addEventListener('click', putToLuke);
