const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
                    },
                ] 
            },
            {
                test: /\.js$/, // va a buscar archivos de js
                exclude: /node_modules/, // significa que no va a buscar en la carpeta de no_modules
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpg|svg|jpeg|gif)$/, // va a buscar imágenes
                use: ["file-loader"] // nombre del loader para las imágenes
            },
            {
                test: /\.scss$/, // va a buscar archivos de sass
                use: [
                    "style-loader", //estilos en linea de css
                    "css-loader", // procesador de los archivos de sass
                    "sass-loader" //procesador de los archivos de sass
                ] // nombre del loader para las imágenes
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"./index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css" // esto es para manejar muchas lineas de código
        })
    ]
}