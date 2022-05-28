export const breadcrumb = (pathname: string) => {
  const chunks = pathname.split("/");
  let breadcrumbHTML = "<div class=\"flex\">";
  for (let i=0; i<chunks.length; i++) {
    if (chunks[i]) {
      breadcrumbHTML += `<div class="breadcrumb">
                            <a href="/">                    
                                ${chunks[i]}
                            </a>
                        </div>`;
    }
  }
  breadcrumbHTML += "</div>";
  return breadcrumbHTML;
};
