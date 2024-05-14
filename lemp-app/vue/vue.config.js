const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: 8081, // Puerto del servidor de desarrollo
    disableHostCheck: true // Habilitar esta opción para solucionar el error "Invalid Host header"
  },
  transpileDependencies: true // Transpilar dependencias
})
