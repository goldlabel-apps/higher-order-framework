import pJSON from "../../package.json";
import {
  headstart,
  headfinish,
  finish,
  css,
  meta,
  scripts,
  getSiteinfo,
  // getRoutes,
  getLinks,
  serviceWorker,
} from "./";

export const render = async (request): Promise<string> => {
  const {version} = pJSON;
  const {hostname} = request;
  const siteinfo = await getSiteinfo(hostname);
  // @ts-ignore
  const {name, baseURL, tagline, avatar} = siteinfo[0].data;
  const links = await getLinks();
  let linksHTML = "";
  for (let i = 0; i < links.length; i++) {
    const {data} = links[i];
    const {label, url, target} = data;
    linksHTML += `<a href="${url}" class="link" target="${target}">
        ${label}
      </a>&nbsp;`;
  }

  const pagetTitle = `${name}. ${tagline}`;

  return `${headstart()}
  
    ${meta(siteinfo)}

    <title>${ pagetTitle }</title>

    ${css()}

  ${scripts(siteinfo)}

  ${serviceWorker(request)}
  
  ${headfinish()}
      
      <div id="ssrDiv" class="ssr fallback-off">

        <div class="header">
          <a href="${baseURL}/?logoclick">
            <img class="avatar" src="${avatar}" align="left" alt="${tagline}" />
          </a>
          <div>
            <a href="${baseURL}/">
              <h1 class="title pad-top-1">
                ${name}
              </h1>
              <h2>${tagline}</h2>
            </a>
          </div>
        </div>
      
        <div class="links">
          ${linksHTML}
        </div>

      </div>
      
    ${finish(version)}`;
};
