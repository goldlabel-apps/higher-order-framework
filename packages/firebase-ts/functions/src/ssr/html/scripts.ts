export const scripts = (siteinfo: any) => {
  let importsHTML = "";
  // @ts-ignore
  const {imports} = siteinfo[0].data;
  Object.entries(imports).map((item) => {
    // @ts-ignore
    importsHTML += `"${item[1].name}": "${item[1].url}",`;
    importsHTML += `
          `;
  });

  return `
    <script type="systemjs-importmap">
      {
        "imports": {
          ${importsHTML}
          "@mui/material":"https://unpkg.com/@mui/material@5.4.3/umd/material-ui.production.min.js",
          "react": "https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.production.min.js",
          "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.min.js",
          "react-redux": "https://cdnjs.cloudflare.com/ajax/libs/react-redux/7.2.6/react-redux.min.js",
          "@reduxjs/toolkit": "https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@1.8.0/dist/index.min.js",
          "react-draggable": "https://cdn.jsdelivr.net/npm/react-draggable@4.4.4/build/cjs/cjs.min.js",
          "gsap": "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.3/gsap.min.js",
          "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js"
        }
      }
    </script>
        
    <script src="https://cdn.jsdelivr.net/npm/regenerator-runtime@0.13.7/runtime.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/import-map-overrides@2.2.0/dist/import-map-overrides.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/systemjs@6.8.3/dist/system.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/systemjs@6.8.3/dist/extras/amd.min.js"></script>
    
    <script>
      var ssr = ${JSON.stringify(siteinfo, null, 2)};
    </script>`;
};
