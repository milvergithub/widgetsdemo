/* eslint-disable */
// npm i @vue/cli-service -g es requrido 
// widgets/appointment/Main.vue 
// para crear el td-reviews.min.js usar el comando 
// vue-cli-service build widgets/appointment/Main.vue --target wc --name td-appointment --dest static/widgets/appointment
module.exports = (apikey, environment, country, storage) => {
    const reviews = document.createElement('script')
    reviews.src = `${storage}/static/widgets/appointment/td-appointment.min.js`
    const vue = document.createElement('script')
    vue.src = 'https://cdn.jsdelivr.net/npm/vue@2.6.0'
    document.querySelector('head').appendChild(vue).appendChild(reviews)

    const env = environment === 'localhost' ? 'dev' : environment
    const container = document.querySelector('#topdoctors-' + country + '-widget-container-13')
    const component = document.createElement('td-appointment')
    component.setAttribute('environment', env)
    component.setAttribute('api-key', apikey)
    component.setAttribute('region', country)
    component.setAttribute('widget-type', 13)
    component.setAttribute('storage', storage)
    container.innerHTML = ''
    container.appendChild(component)
}