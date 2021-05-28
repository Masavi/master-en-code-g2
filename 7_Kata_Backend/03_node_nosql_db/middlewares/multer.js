const multer = require('multer');

const multerInstance = multer({
  storage: multer.memoryStorage(),
  limits: {
    // 5 bytes * 1024 = 5kb
    // 5 kbs * 1024 = 5mb
    fileSize: 5 * 1024 * 1024,
  },
});

module.exports = multerInstance;
