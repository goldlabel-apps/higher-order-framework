export const meta = (siteinfo: any) => {
  const {
    name,
    location,
    keywords,
    tagline,
    avatar,
    manifest,
    // icon,
    // baseURL,
    // image,
    // author,
  } = siteinfo[0].data;

  const {placename, region, position, ICBM} = location;

  return `<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <meta itemprop="name" content="${name}" />
    <meta name="${name}" />
    <meta name="description" content="${tagline}" />
    <meta name="keywords" content="${keywords}" />
    <link rel="shortcut icon" type="image/x-icon" href="https://listingslab.com/favicon.ico">
    <link rel="manifest" href="${manifest}">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="HandheldFriendly" content="true" />
    <meta name="theme-color" content="#FFFFFF" />
    <link rel="apple-touch-icon" href="${avatar}" />

    <meta name="geo.region" content="${region}" />
    <meta name="geo.placename" content="${placename}" />
    <meta name="geo.position" content="${position}" />
    <meta name="ICBM" content="${ICBM}" />


    <meta name="importmap-type" content="systemjs-importmap" />`;
};


/*
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${baseURL}" />
    <meta property="og:title" content="${name}" />
    <meta property="og:description" content="${tagline}" />
    <meta property="og:image" content="${image}" />
    <meta name="twitter:site" content="${baseURL}" />
    <meta name="twitter:title" content="${name}" />
    <meta name="twitter:description" content="${tagline}"/>
    <meta name="twitter:creator" content="${author}" />
    <meta name="twitter:image" content="${image}" />
*/
