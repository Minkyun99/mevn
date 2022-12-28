const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig(
  {
    transpileDependencies: true,
    productionSouceMap: false
  },

  {
    chainWebpack: (config) => {
      config.module.rules.delete('eslint')
    }
  }
)
