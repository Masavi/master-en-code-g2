const HtmlWebpackPlugin = require('html-webpack-plugin');
// commonJS
module.exports = {
    module: {
        rules: [ // Cargar los loaders, que necesitamos para que webpack haga lo que necesitamos 
            {
             test: /\.html/, // Definir lo que tengo que buscar
             use: [ // lo que yo encontre, qué voy a hacer con ello.
                 {
                     loader: "html-loader",// El nombre del loader, que va a traducir el html para que webpack lo entienda.
                     options: { minimize: true}
                    }
                ] 
            }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"./index.html",
        }),
    ]
}