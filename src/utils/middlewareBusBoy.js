const Busboy = require('busboy');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = {
  formData(req, res, next) {
    let uploadingFile = false;

    function done() {
      if (uploadingFile) return;
      next();
    }
    const busboy = new Busboy({ headers: req.headers });
    req.body = {};

    busboy.on('field', (key, value) => {
      req.body[key] = value;
    });

    busboy.on('file', (fieldname, file, filename) => {
      uploadingFile = true;
      const stream = cloudinary.uploader.upload_stream(
        { upload_preset: process.env.CLOUDINARY_PRESET },
        (error, result) => {
          if (error) {
            throw Error('Algo salio mal');
          }
          //Llegó bien
          req.body[fieldname] = result;
          uploadingFile = false;
          done();
        }
      );

      file.on('data', (data) => {
        stream.write(data);
      });
      file.on('end', () => {
        stream.end();
      });
    });

    busboy.on('finish', () => {
      done();
    });

    req.pipe(busboy);
  },
};
