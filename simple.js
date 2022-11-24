/* eslint-disable */

module.exports = (provider, environmentURL, country, storage, type, name = 'simple') => {
    const container = document.getElementById(`topdoctors-${country}-widget-container-${type}`)

    const link = document.createElement('a')
    const image = document.createElement('img')
    const providerType = {
     'clinic': 'centro',
     'doctor': 'doctor'
    }

    link.setAttribute('href', `${environmentURL}/${providerType[provider.type]}/${provider.slug}`)
    image.src = `${storage}/static/images/widgets/${name}.png`
    image.setAttribute('width', '100%')
    image.setAttribute('alt', 'TopDoctors')

    container.appendChild(link).appendChild(image)
}
