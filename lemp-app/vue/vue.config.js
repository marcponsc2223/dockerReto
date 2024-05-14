const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    disableHostCheck: true // Habilitar esta opción para solucionar el error "Invalid Host header"
  },
  transpileDependencies: true // Transpilar dependencias
})
