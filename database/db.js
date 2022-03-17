var __path = process.cwd(),
      monk = require('monk'),
     { color } = require(__path + '/lib/color.js')

// Connection URL
var url = 'mongodb+srv://Katashi:iyung123@cluster0.zeixi.mongodb.net/test';
try {
if(url == 'mongodb+srv://Katashi:iyung123@cluster0.zeixi.mongodb.net/test') throw console.log(color('Configurasi database, var url belum diisi','red'));
} catch (e) {
	return;
	}
var db = monk(url);

db.then(() => {
  console.log(color('Connected correctly to server, Katashi Hana','green'))
})
.catch ((e) => {
	console.log(color('Error : '+ e +'\n\nGagal connect ke database, \ncek configurasi database apakah Connection URL sudah benar','red'))
	})


module.exports = db
