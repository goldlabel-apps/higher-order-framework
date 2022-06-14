export const css = () => {
  const primaryColor = "#143235";
  return `<style>
        html { height: 100%; }
        body {
            background: rgba(255,255,255,1);
            border: 0; margin: 0; padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Droid Sans", sans-serif;
        }
        .ssr {
          max-width: 800px;
          margin: auto;
        }
        .fallback-on { display: visible; }
        .fallback-off { display: none; }
        .ssr .header {
          display: flex;
          margin: 8px;
          margin-top: 20px;
          padding: 0px;
          padding-bottom: 14px;
        }
        .ssr .header .title {
          margin-top: 4px;
        }
        .ssr .route {
          margin: 8px;
          padding: 8px;
          padding-left: 14px;
          padding-bottom: 14px;
          border-radius: 4px;
        }
        .ssr .route img {
          width: 100%;
        }
        .ssr .route h2 {
          margin-top: 8px;
          margin-bottom: 8px;
        }
        .ssr .header .avatar {
          margin-top: 4px; 
          margin-right: 18px;
        }
        .ssr a {
          color: ${ primaryColor };
          text-decoration: none;
        }
        .ssr h1, .ssr h2, .ssr h3, .ssr h4 {
          margin: 0;
          padding: 0;
          font-weight: lighter;
        }
        .ssr h1 { font-size: 1.75rem; }
        .ssr h2 { font-size: 1rem; }
        .pad-top-1{ padding-top: 8px; }

        .ssr .links {
          text-align: left;
        }

        .ssr .cmsList {
          display: flex;
          flex-direction: column;
        }

        .ssr .nav ul, .ssr .nav li {
          display: inline;
          margin: 4px;
          padding: 4px;
        }

        .ssr .postImage {
          width: 100%;
        }

        .ssr .post {
          width: 320px;
          padding: 16px;
          margin: 8px;
        }

        .ssr .avatar {
          width: 50px;
          height: 50px;
          margin-top: -16px;
        }
    </style>
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css' rel='stylesheet' />
    `;
};
