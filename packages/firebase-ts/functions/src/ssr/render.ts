import pJSON from "../../package.json";
import {
  headstart,
  headfinish,
  finish,
  css,
  meta,
  scripts,
  getSiteinfo,
  getCms,
  getLinks,
  serviceWorker,
} from "./";

export const render = async (request): Promise<string> => {
  const {version} = pJSON;
  const {hostname} = request;
  // const url = request.params[0];
  const siteinfo = await getSiteinfo(hostname);
  // @ts-ignore
  const {name, baseURL, tagline, avatar} = siteinfo[0].data;
  let windowTitle = `${name}. ${tagline}`;
  const links = await getLinks();
  const cms = await getCms();

  let navHTML = "<nav class='nav'><ul>";
  for (let j = 0; j < cms.length; j++) {
    // @ts-ignore
    const {title, slug} = cms[j].data;
    // if (slug == "/") windowTitle = title;
    if (slug !== "/") {
      navHTML += `<li>
        <a href="${baseURL}${slug}">
          ${title}
        </a>
      </li>`;
    }
  }
  navHTML += "</ul></nav>";

  let postsHTML = "<div class='posts'>";
  for (let i = 0; i < cms.length; i++) {
    // @ts-ignore
    const {title, image} = cms[i].data;
    postsHTML += `<div class='post'>
                    <img alt="${title}" src="${image}" class="postImage" />
                  </div>`;
  }
  postsHTML += "</div>";

  let linksHTML = "";
  for (let i = 0; i < links.length; i++) {
    const {data} = links[i];
    const {label, url, target} = data;
    linksHTML += `<a href="${url}" class="link" target="${target}">
                    ${label}
                  </a>&nbsp;`;
  }

  return `${headstart()}
  
    ${meta(siteinfo)}

    <title>${ windowTitle }</title>

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
        <div>

        
        ${ navHTML }
        
        
        </div>

        ${ postsHTML }
        
        <div class="links">
          ${ linksHTML }
        </div>


      </div>
      
    ${finish(version)}`;
};
