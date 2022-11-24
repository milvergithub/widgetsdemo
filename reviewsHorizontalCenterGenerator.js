/* eslint-disable */
// npm i @vue/cli-service -g es requrido
// widgets/reviewsHorizontal/Main.vue
// para crear el td-reviews-horizontal.min.js usar el comando
// vue-cli-service build widgets/reviewsHorizontal/Main.vue --target wc --name td-reviews-horizontal --dest static/widgets/reviewsHorizontal
module.exports = (apikey, environment, country, storage) => {
    const reviews = document.createElement('script')
    reviews.src = `${storage}/static/widgets/reviewsHorizontalCenter/td-reviews-horizontal-center.min.js`
    const vue = document.createElement('script')
    vue.src = 'https://cdn.jsdelivr.net/npm/vue@2.6.0'
    document.querySelector('head').appendChild(vue).appendChild(reviews)

    const env = environment === 'localhost' ? 'dev' : environment
    const container = document.querySelector('#topdoctors-' + country + '-widget-container-21')
    const component = document.createElement('td-reviews-horizontal-center')
    setTimeout(() => {
      component.setAttribute('environment', env)
      component.setAttribute('api-key', apikey)
      component.setAttribute('region', country)
      component.setAttribute('widget-type', 21)
      component.setAttribute('storage', storage)
      container.innerHTML = ''
      container.appendChild(component)
    },
      500
    )
}
