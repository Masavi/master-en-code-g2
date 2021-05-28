require('dotenv').config();
const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
  projectId: process.env.FIREBASE_PROJECT_ID, // Desde Firebase Settings
  keyFilename: "service.json",
});

// Mucho ojo: la url NO LLEVA gs:// al inicio
const bucket = storage.bucket(process.env.FIREBASE_BUCKET_URL);

module.exports = (file) =>{
  return new Promise((resolve,reject) => {
      if(!file) reject("No hay ningun arhivo");

      console.log(file);
      const newFilename = `${file.originalname}_${Date.now()}`; // esto va a renombra el archivo
      const fileUpload  =  bucket.file(newFilename); // voy a crear un nuevo archivo

      /*
        Opcional: cómo podrías validar tipos de archivo
      */
      /*
        const valid_mimetypes = ['image/jpeg', 'image/png']
        if(valid_mimetypes.indexOf(file.mimetype) === -1) reject('Es necesario enviar un tipo valido')
      */

      const blobStream =  fileUpload.createWriteStream({ //stream de datos le voy a mandar los pedicitos de mi archivo
          metadata: {
              contentType: file.mimetype  // que tipo de archivo es el que te voy a mandar
          }
      })

      blobStream.on('error', (error) => {
          reject(error)
      }) // si pasa un error la promesa debe regresar un error

  
      blobStream.on('finish',() =>{
          const url = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${fileUpload.name}?alt=media`
          resolve(url)

      }) // si todo sale bien regresame la url de mi archivo

      blobStream.end(file.buffer); // aqui empiezo la transmision de datos del backend al bucket
  })
}