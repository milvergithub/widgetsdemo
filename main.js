/* eslint-disable */
//npm i --global rollup
//para crear el min.js
//usar dentro de la carpeta
//rollup -c && mv bundle.js "main.$(md5sum bundle.js | awk '{print $1}' FS="  "| cut -c-16).js"
// poner el hash de la vercion en backoffice-provider -> src/modules/marketing/views/Main.vue
// subir el main.xxxx.js a google cloud store -> td360dev-public/static/widgets
(function () {
  const generateSimpleWidget = require('./simple')
  const generateRequestAppointmentWidget = require('./request-appointment')
  const generateTelemedicineWidget = require('./telemedicine/telemedicine')
  const generateAppointmentIframe = require('./appointment')
  const generateTelemedicineWidgetImageDesc = require('./telemedicine/image-desc-telemedicine')
  const generateTelemedicineCenterWidgetImageDesc = require('./telemedicine/image-desc-telemedicineCenter')
  const generateReviewsDoctorWidget = require('./reviewsDoctorGenerator')
  const generateReviewsHorizontalGenerator = require('./reviewsHorizontalGenerator')
  const generateAppointmentGenerator = require('./appointmentGenerator')
  const generateAppointmentHorizontalGenerator = require('./appointmentHorizontalGenerator')
  const generateReviewsWidget = require('./reviewsGenerator')
  const generateAppointmentCenterGenerator = require('./appointmentCenterGenerator')
  const generateReviewsCenterWidget = require('./reviewsCenterGenerator')
  const generateReviewsHorizontalCenterGenerator = require('./reviewsHorizontalCenterGenerator')
  const domainsByRegion = {
    ar: 'com.ar',
    cl: 'cl',
    co: 'com.co',
    sa: 'com.sa'
  }

  var currentScript = document.currentScript
  var TopDoctorsAPI = {
    url: null,
    apikey: null,
    country: 'es',
    getlink: false,
    environment: 'prod',
    storage: '',
    config: {}
  }
  let libs = []

  function queryStringToObj(query) {
    if ('URLSearchParams' in window) {
      const obj = {}
      const urlQuery = '?' + query
      const parsedQuery = new URLSearchParams(urlQuery)
      for (var p of parsedQuery) {
        obj[p[0]] = p[1]
      }
      return obj
    }
  }

  function getEnvironmentURL(environment) {
    const url = `https://${environment}.topdoctors.`
    TopDoctorsAPI.environmentURL = url + domainsByRegion[TopDoctorsAPI.country]
    TopDoctorsAPI.storage = `https://static${environment}.topdoctors.` + domainsByRegion[TopDoctorsAPI.country]
  }

  function loadAxios() {
    libs.push({ src: 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js', type: 'script' })
  }

  function injectLibFromStack() {
    if (libs.length > 0) {
      // grab the next item on the stack
      const nextLib = libs.shift()
      const headTag = document.getElementsByTagName('head')[0]
      // create a script tag with this library
      const scriptTag = document.createElement(nextLib.type)
      if (nextLib.type === 'script') {
        scriptTag.src = nextLib.src
      } else {
        scriptTag.rel = 'stylesheet';
        scriptTag.type = 'text/css';
        scriptTag.href = nextLib.src;
      }
      // when successful, inject the next script
      scriptTag.onload = function (e) {
        injectLibFromStack()
      }
      // append the script tag to the <head></head>
      headTag.appendChild(scriptTag)
    }
  }

  function manipulateSrcScript() {
    const srcScript = currentScript.getAttribute('src')
    const srcFilters = srcScript.split('#')
    if (srcFilters[1]) {
      TopDoctorsAPI = queryStringToObj(srcFilters[1])
    }
    const host = TopDoctorsAPI.environment === 'localhost' ? 'dev' : TopDoctorsAPI.environment
    TopDoctorsAPI.URL = `https://api${host}.topdoctors.es/providers/apikey/${TopDoctorsAPI.apikey}?widget_type=${TopDoctorsAPI.type}`
    getEnvironmentURL(host)
  }

  async function getProviderDetail() {
    var config = {
      headers: {
        'X-Region': TopDoctorsAPI.country
      }
    }
    if (window.axios !== undefined) {
      const { data } = await window.axios.get(TopDoctorsAPI.URL, config)
      return data
    }
  }

  async function widgetManager(provider) {
    const prov = await provider
    libs = [].concat.apply([], libs)

    injectLibFromStack()

    setTimeout(async () => {
      if (prov) {
        const { type, environmentURL, environment, country, storage, apikey, config } = TopDoctorsAPI
        switch (type) {
          case '1':
            generateSimpleWidget(prov, environmentURL, country, storage, type, 'simple')
            break
          case '2':
            generateRequestAppointmentWidget(await provider, environmentURL, country, storage)
            break
          case '3':
            generateReviewsWidget(apikey, environment, country, storage)
            break
          case '4':
            generateTelemedicineOrSimpleWidget(prov)
            break
          case '6':
            generateAppointmentIframe(prov, { apikey, config }, environmentURL, country)
            break
          case '7':
            generateSimpleWidget(prov, environmentURL, country, storage, type, 'powerdWidget')
            break
          case '8':
            generateSimpleWidget(prov, environmentURL, country, storage, type, 'memberWidget')
            break
          case '9':
            generateSimpleWidget(prov, environmentURL, country, storage, type, 'awardsWidget')
            break
          case '10':
            generateTelemedicineWidgetImageDesc(prov, environmentURL, country, storage)
            break
          case '11':
            generateReviewsDoctorWidget(apikey, environment, country, storage)
            break
          case '12':
            generateReviewsHorizontalGenerator(apikey, environment, country, storage)
            break
          case '13':
            generateAppointmentGenerator(apikey, environment, country, storage)
            break
          case '14':
            generateAppointmentHorizontalGenerator(apikey, environment, country, storage)
            break
          case '15':
            generateTelemedicineCenterWidgetImageDesc(prov, environmentURL, country, storage)
            break
          case '16':
            generateAppointmentCenterGenerator(apikey, environment, country, storage)
            break
          case '18':
            generateReviewsCenterWidget(apikey, environment, country, storage)
            break
          case '21':
            generateReviewsHorizontalCenterGenerator(apikey, environment, country, storage)
            break
          default:
        }
      } else {
        console.info('Something were wrong..')
      }
    }, 200)
  }

  function generateTelemedicineOrSimpleWidget(prov) {
    const style = document.createElement('link')
    style.rel = 'stylesheet'
    style.type = 'text/css'
    style.href = `${TopDoctorsAPI.storage}/static/widgets/styles.css`
    document.querySelector('head').appendChild(style)
    if (prov.telemedicine) {
      generateTelemedicineWidget(prov, TopDoctorsAPI.environmentURL, TopDoctorsAPI.country, TopDoctorsAPI.storage)
    } else {
      const widgetContainer = document.querySelector('#topdoctors-' + TopDoctorsAPI.country + '-widget-container-4')
      widgetContainer.setAttribute('id', 'topdoctors-' + TopDoctorsAPI.country + '-widget-container-1')
      generateSimpleWidget(prov, TopDoctorsAPI.environmentURL, TopDoctorsAPI.country, TopDoctorsAPI.storage, TopDoctorsAPI.type, 'simple')
    }
  }

  function main() {
    injectLibFromStack()
    setTimeout(async () => {
      try {
        await widgetManager(getProviderDetail())
      } catch (err) {
        console.log(err)
      }
    }, 500)
  }

  manipulateSrcScript()
  loadAxios()
  main()
})()
