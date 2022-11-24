/* eslint-disable */

module.exports = (provider, environmentURL, country, storage) => {
    const i18n = {
      'es-ES': {
        header: "Mensajería privada o Videoconsulta",
        button: "Pedir cita ahora"
      },
      'es-AR': {
        header: "Mensajería privada o Videoconsulta",
        button: "Pedir cita ahora"
      },
      'es-CO': {
        header: "Mensajería privada o Videoconsulta",
        button: "Pedir cita ahora"
      },
      'es-CL': {
        header: "Mensajería privada o Videoconsulta",
        button: "Pedir cita ahora"
      },
      'en-US': {
        header: "Private messaging or Video conference",
        button: "Ask for appointment now"
      },
      'en-GB': {
        header: "Private messaging or Video conference",
        button: "Ask for appointment now"
      },
      'ar-SA': {
        header: "Private messaging or Video conference",
        button: "لطلب موعد ، انقر هنا"
      }
    }

    var styles = `
      .widget_telemedicine_main {
        font-size: 14px;
        margin: auto;
        border-radius: 5px;
        padding: 1px;
        color: #BFCACE;
        background: #FFF;
      }
      .center-elements {
        text-align: center;
      }
      .container-telemedicine-widget {
        padding: 10px;
        border-radius: 5px;
        display: flex;
        width: 360px;
        height: 122px;
        flex-direction: column;
        justify-content: center;
        background: white;
        border: 1px solid #D9D9D9;
        margin: 0 auto;
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
        margin: 5px auto;
      }
      .connect-button:hover {
        background-color: #007FB5
      }

      .widget_container {
        border-radius: 3px;
      }

      .widget_header {
        padding: 0;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        color: #1D4766;
      }
      .header-telemedicine-widget {
      	font-size: 18px;
        margin: 0;
        font-weight: normal;
      }
      .widget_body {
        padding: 5px;
        margin: 15px;
        border: 1px solid #D9D9D9;
        border-radius: 5px;
        margin-bottom: 5px;
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
      .widget_telemedicine_footer img {
       	margin: 0 auto;
        width: auto;
        height: auto;
       }
      .widget_telemedicine_footer {
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
    const widget = document.getElementById('topdoctors-'+country+'-widget-container-4')

    const widgetContainer = document.createElement('div')
    widgetContainer.setAttribute("class", "center-elements")

    const container = document.createElement('div')
    container.setAttribute('class', 'container-telemedicine-widget')

    const header = document.createElement('div')
    header.setAttribute('class', 'widget_header')

    const title = document.createElement('h1')
    title.setAttribute('class', 'header-telemedicine-widget')
    title.innerText = i18n[navigator.language] ? i18n[navigator.language].header : i18n['en-US'].header
    header.appendChild(title)

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
    footer.setAttribute('class', 'widget_telemedicine_footer')


    const image = document.createElement('img')
    image.src = storage + '/static/widgets/powered-by-topdoctors.png'
    image.setAttribute('width', '100%')
    image.setAttribute('alt', 'TopDoctors')
    footer.appendChild(image)

    container.appendChild(header)
    container.appendChild(footer)
    widgetContainer.appendChild(container)
    widget.appendChild(widgetContainer)
  }
