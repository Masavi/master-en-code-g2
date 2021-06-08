const multer = require('multer');
const { NODE_ENV } = process.env;

const storage = NODE_ENV === 'production'
  ? multer.memoryStorage()
  : multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'uploads');
      },
      filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
      },
    })

const multerInstance = multer({
  storage,
  limits: {
    // 5 bytes * 1024 = 5kb
    // 5 kbs * 1024 = 5mb
    fileSize: 5 * 1024 * 1024,
  },
});

module.exports = multerInstance;
