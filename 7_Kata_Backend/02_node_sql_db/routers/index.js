const express = require('express');
const router = express.Router();

router.use(require('./RentalRouter'));
router.use(require('./UserRouter'));

/*
  Una forma alternativa de manejar
  rutas públicas (sin proteger)
  rutas privadas (protegidas por token)

  es manejar dos archivos de rutas como:
  PublicRouter.js
  PrivateRouter.js

  e importarlas acá igual los otros routers:

  router.use(require('./PublicRouter'));
  router.use(verifyToken);
  router.use(require('./PrivateRouter'));
*/

module.exports = router;