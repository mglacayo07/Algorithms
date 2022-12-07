// Descripción de Geocerca
var description = "[{'type': 'VZ', 'vel': '0', 'grades': '0', 'txt': 'Velocidad a 30km', 'range': 'GD'},{'type': 'VEL', 'vel': '50', 'grades': '0', 'txt': '', 'range': 'GD'},{'type': 'PP', 'vel': '0', 'grades': '0 - 90', 'txt': 'Parada no autorizada', 'range': 'GD4'},{'type': 'PA', 'vel': '0', 'grades': '180 - 270', 'txt': 'Parada autorizada', 'range': 'GD4'}]";
// Conversion de Geocerca en array
description = description.replace("[","").replace("]","");
var arrays = description.split("},");
// Inicialización de variables de apoyo
var json = {};   //variable de apoyo
var objs = {};   //variable de apoyo
var txt = "";    //variable de apoyo
var key = "";    //variable de apoyo
var value = "";  //variable de apoyo

var allData = []; //variable con los datos finales

// Comienza proceso de string a array con json
arrays.forEach(function(array) {
  objs = array.replace("{","").replace("}","").split(',');
  json = {};
  objs.forEach(function(obj) {
	txt = obj.split(":");
	key = txt[0].replace(" '",'').replace("'",'').replace("'",'');
	value = txt[1].replace("' ",'').replace("'",'').replace("'",'');
	json[key]=value;
  });
  allData.push(json);
});
log("--------- Datos en lista de json ---------");
log(allData);
// Finaliza proceso de string a array con json
log("---------  ---------");


// Comienza lectura del array con json
allData.forEach(function(data) {
  log("TYPE:");
  log(data['type']);
  log("VEL:");
  log(data['vel']);
  log("RANGE:");
  log(data['range']);
  log("GRADES:");
  log(data['grades']);
  log("TEXT:");
  log(data['txt']);
  log("-----");

});
// Finaliza lectura del array con json
log("OK");