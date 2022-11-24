/* eslint-disable */

module.exports = (provider, environmentURL, country, storage) => {
  const i18n = {
    "es-ES": {
      button: "Pide cita ahora",
    },
    "es-AR": {
      button: "Pide cita ahora",
    },
    "es-CO": {
      button: "Pide cita ahora",
    },
    "es-CL": {
      button: "Pide cita ahora",
    },
    "en-US": {
      button: "Ask for appointment now",
    },
    "en-GB": {
      button: "Ask for appointment now",
    },
    "ar-SA": {
      button: "لطلب موعد ، انقر هنا",
    },
  };

  const styles = `
    .widget_main {
      font-size: 14px;
      margin: auto;
      border-radius: 5px;
      background: #FFF;
    }

    .center-elements {
      text-align: center;
    }

    .container-request-appointment-widget {
      padding: 10px 10px 0 10px;
      width: 360px;
      height: 88px;
      border: 1px solid #D9D9D9;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: white;
      margin: 0 auto;
    }

    .connect-button {
      border-radius: 3px;
      background: #01A0E6;
      color: white !important;
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
      background: rgb(0, 115, 165);
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

    .widget_header {
      padding: 0;
      width: 100%;
      text-align: center;
    }

    .widget_body {
      border: 1px solid #D9D9D9;
      border-radius: 5px;
      margin-bottom: 5px;
    }

    .widget_footer img {
      margin: 0 auto;
     width: 100%;
     height: auto;
    }

    .widget_footer {
      width: 200px;
      height: auto;
      text-align: center;
      padding-top: 2px;
    }

    .header-widget {
      text-align: center;
      color: #1B617E;
      font-family: 'Roboto', sans-serif;
    }
  `

  const providerType = {
    clinic: 'centro',
    doctor: 'doctor'
  }

  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  const styleFont = document.createElement("link");
  styleFont.rel = 'stylesheet'
  styleFont.href = 'https://fonts.googleapis.com/css?family=Roboto'
  document.head.appendChild(styleFont);

  const styleCSS = document.createElement("link");
  styleCSS.rel = 'stylesheet'
  styleCSS.href = 'https://cdn.jsdelivr.net/npm/@mdi/font@6.9.96/css/materialdesignicons.min.css'
  document.head.appendChild(styleCSS);

  const browserLocale = (navigator.language || navigator.userLanguage).slice(
    0,
    2
  );

  const widget = document.getElementById(
    "topdoctors-" + country + "-widget-container-2"
  );

  const widgetContainer = document.createElement("div");
  widgetContainer.setAttribute("class", "center-elements");

  const container = document.createElement("div");
  container.setAttribute("class", "container-request-appointment-widget");

  const header = document.createElement("div");
  header.setAttribute("class", "widget_header");

  const link = document.createElement("a");
  link.setAttribute("class", "connect-button");
  link.setAttribute(
    "href",
    environmentURL +
      "/" +
      providerType[provider.type] +
      "/" +
      provider.slug +
      "?action=appointment"
  );
  link.innerText = i18n[navigator.language]
    ? i18n[navigator.language].button
    : i18n["en-US"].button;
  link.innerHTML += "<span class='w-icon mdi mdi-chevron-right'></span>";
  header.appendChild(link);

  const footer = document.createElement("div");
  footer.setAttribute("class", "widget_footer");

  const imagePrefix = browserLocale !== "es" ? "en" : "es";
  const image = document.createElement("img");
  image.src = storage + "/static/widgets/powered-by-topdoctors.png";
  image.setAttribute("width", "100%");
  image.setAttribute("alt", "TopDoctors");
  footer.appendChild(image);

  container.appendChild(header);
  container.appendChild(footer);
  widgetContainer.appendChild(container);
  widget.appendChild(widgetContainer);
};
