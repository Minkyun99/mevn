const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  css: {
    extract: true //css파일을 표시할 건지, 말건지 선택
  },
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  }
})

//vue 파일을 가공할 때 크기를 늘릴 건지, 줄인건지 선택 가능함.
