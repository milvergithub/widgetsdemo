/* eslint-disable */
// lo que carga el ifrmae es  components/views/appointment_iframe/_id/index.vue
function encodeQueryData(data) {
  return Object.keys(data)
    .map((key) => {
      return [key, data[key]].map(encodeURIComponent).join('=')
    })
    .join('&')
}

module.exports = (provider, baseConfig, environment, country) => {
  const iframe = document.createElement('iframe')
  const container = document.querySelector('#topdoctors-'+country+'-widget-container-6')
  if (provider && baseConfig) {
    var base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/
    const { apikey, config } = baseConfig
    if (base64regex.test(config)) {
      iframe.src = environment + '/iframe/' + provider.id + '/?' + decodeURI(encodeQueryData({ apikey, config: atob(config)}))
    } else {
      iframe.src = environment + '/iframe/' + provider.id
    }
    iframe.style.minHeight = 600 + 'px'
    iframe.style.minWidth = 350 + 'px'
    container.appendChild(iframe)
  }
}
