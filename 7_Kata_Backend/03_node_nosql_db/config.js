const {
    NODE_ENV,
    MONGO_ATLAS_USER,
    MONGO_ATLAS_PASSWORD,
} = process.env;

const databases = {
    // Cambios significativos en la estructura de la bd
    test: {
        db_uri: `mongodb+srv://${MONGO_ATLAS_USER}:${MONGO_ATLAS_PASSWORD}@madea.j9vdi.mongodb.net/test?retryWrites=true&w=majority`
    },
    // Entorno predeterminado para trabajar en el día a día       
    dev: {
        db_uri: `mongodb+srv://${MONGO_ATLAS_USER}:${MONGO_ATLAS_PASSWORD}@madea.j9vdi.mongodb.net/development?retryWrites=true&w=majority`
    },
    // Contiene los datos reales de nuestros usuarios/clientes
    production: {
        db_uri: `mongodb+srv://${MONGO_ATLAS_USER}:${MONGO_ATLAS_PASSWORD}@madea.j9vdi.mongodb.net/MasterEnCode?retryWrites=true&w=majority`
    },
}

console.log('NODE_ENV:', NODE_ENV);

module.exports = databases[NODE_ENV]
