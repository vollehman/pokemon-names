var rest = require('rest-js');
var restApi = rest('http://pokeapi.co/api/v2/', {crossDomain: true});

var request = require('request');


function getName(callback) {
        var randomPokeIndex = Math.floor(Math.random() * Math.floor(949))
        let poke = new Promise(function(resolve) {

         request('http://pokeapi.co/api/v2/pokemon/'+randomPokeIndex, function (error, response, body) {
          resolve(JSON.parse(body))     
        })
        })
        
        poke.then(function(value) {
            callback(value.name)
        });

    }

module.exports.getName = getName;