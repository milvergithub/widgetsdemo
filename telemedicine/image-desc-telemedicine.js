/* eslint-disable */

module.exports = (provider, environmentURL, country, storage) => {
    const i18n = {
      'es-ES': {
        header: "Telemedicina",
        description: 'Contacta ahora mediante <strong>mensajería privada</strong> o <strong>videoconsulta</strong> con el magiclink del doctor.',
        button: "Pedir cita ahora"
      },
      'es-AR': {
        header: "Telemedicina",
        description: 'Contacta ahora mediante <strong>mensajería privada</strong> o <strong>videoconsulta</strong> con el magiclink del doctor.',
        button: "Pedir cita ahora"
      },
      'es-CO': {
        header: "Telemedicina",
        description: 'Contacta ahora mediante <strong>mensajería privada</strong> o <strong>videoconsulta</strong> con el magiclink del doctor.',
        button: "Pedir cita ahora"
      },
      'es-CL': {
        header: "Telemedicina",
        description: 'Contacta ahora mediante <strong>mensajería privada</strong> o <strong>videoconsulta</strong> con el magiclink del doctor.',
        button: "Pedir cita ahora"
      },
      'en-US': {
        header: "Telemedicine",
        description: 'Contacta ahora mediante <strong>mensajería privada</strong> o <strong>videoconsulta</strong> con el magiclink del doctor.',
        button: "Ask for appointment now"
      },
      'en-GB': {
        header: "Telemedicine",
        description: 'Contacta ahora mediante <strong>mensajería privada</strong> o <strong>videoconsulta</strong> con el magiclink del doctor.',
        button: "Ask for appointment now"
      },
      'ar-SA': {
        header: "Telemedicine",
        description: 'Contacta ahora mediante <strong>mensajería privada</strong> o <strong>videoconsulta</strong> con el magiclink del doctor.',
        button: "لطلب موعد ، انقر هنا"
      }
    }

    var styles = `
      .widget_desc_main {
        font-size: 14px;
        margin: auto;
        border-radius: 5px;
        padding: 1px;
        color: #BFCACE;
        background: #FFF;
      }

      .container-telemedicine-desc-widget {
        max-width: 1080px;
        height: 235px;
        border: 1px solid #D9D9D9;
        border-radius: 5px;
        display: flex;
        padding: 0 10px 0 10px;
        justify-content: space-between;
        background: white;
      }
      .connect-button {
        border-radius: 3px;
        background: #01A0E6;
        color: white;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;;
        text-align: center;
        text-decoration: none;
        height: 40px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
      .connect-button:hover {
        background-color: #007FB5
      }
      .w-icon {
        display: block;
        width: 28px;
        height: 28px;
        position: absolute;
        right: 5px;
        top: 5px;
        font-size: 24px;
      }
      .widget_container {
        border-radius: 3px;
      }

      .img-content {
      	height: 100%;
        width: auto;
      }

      .widget_desc_header {
        padding: 4%;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        color: #1D4766;
      }
      .header-widget {
      	font-size: 24px;
        margin: 0;
        margin-top: 10px;
      }
      .header-desc {
      	font-size: 16px;
        font-weight: light;
      }
      .widget_body {
        margin: 15px;
        border: 1px solid #D9D9D9;
        border-radius: 5px;
        margin-bottom: 5px;
      }
      .right-side {
      	max-width: 50%;
      }
      .widget_footer_desc img {
        margin: 0 auto;
        width: auto;
        height: auto;
      }
      .widget_footer_desc {
        width: 100%;
        text-align: center;
        padding-top: 2px;
      }
    `

    const styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)

    const styleFont = document.createElement("link");
    styleFont.rel = 'stylesheet'
    styleFont.href = 'https://fonts.googleapis.com/css?family=Roboto'
    document.head.appendChild(styleFont);

    const styleCSS = document.createElement("link");
    styleCSS.rel = 'stylesheet'
    styleCSS.href = 'https://cdn.jsdelivr.net/npm/@mdi/font@6.9.96/css/materialdesignicons.min.css'
    document.head.appendChild(styleCSS);

    const browserLocale = (navigator.language || navigator.userLanguage).slice(0, 2)
    const widget = document.getElementById('topdoctors-'+country+'-widget-container-10')

    const widgetContainer = document.createElement('div')

    const container = document.createElement('div')
    container.setAttribute('class', 'container-telemedicine-desc-widget')

    const divImage = document.createElement('div')

    const imageContent = document.createElement('img')
    imageContent.src = 'https://mixapolis.com/mbappe/widget-computer-doc.jpg'
    imageContent.setAttribute('width', '100%')
    imageContent.setAttribute('alt', 'TopDoctors')
    imageContent.setAttribute('class', 'img-content')
    divImage.appendChild(imageContent)

    const divContent = document.createElement('div')
    divContent.setAttribute('class', 'right-side')

    const header = document.createElement('div')
    header.setAttribute('class', 'widget_desc_header')

    const title = document.createElement('h1')
    title.setAttribute('class', 'header-widget')
    title.innerText = i18n[navigator.language] ? i18n[navigator.language].header : i18n['en-US'].header
    header.appendChild(title)

    const description = document.createElement('p')
    description.setAttribute('class', 'header-desc')
    description.innerHTML = i18n[navigator.language] ? i18n[navigator.language].description : i18n['en-US'].description
    header.appendChild(description)

    const link = document.createElement('a')
    link.setAttribute('class', 'connect-button')
    link.setAttribute(
      'href',
      `${environmentURL}/${provider.type}/${provider.slug}?telemedicine=true`
    )
    link.innerText = i18n[navigator.language] ? i18n[navigator.language].button : i18n['en-US'].button
    link.innerHTML += "<span class='w-icon mdi mdi-chevron-right'></span>";
    header.appendChild(link)

    const footer = document.createElement('div')
    footer.setAttribute('class', 'widget_footer_desc')


    const image = document.createElement('img')
    image.src = storage + '/static/widgets/powered-by-topdoctors.png'
    image.setAttribute('width', '100%')
    image.setAttribute('alt', 'TopDoctors')
    footer.appendChild(image)
    divContent.appendChild(header)
    divContent.appendChild(footer)
    container.appendChild(divImage)
    container.appendChild(divContent)
    widgetContainer.appendChild(container)
    widget.appendChild(widgetContainer)
}
