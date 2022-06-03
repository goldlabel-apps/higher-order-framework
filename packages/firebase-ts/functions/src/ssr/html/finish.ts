export const finish = (version: string) => {
  return `  <script>
              System.import('@listingslab/root-config')
              // console.warn("ssr ${version}")
              // setTimeout(() => {
              //   var el = document.getElementById("ssrDiv")
              //   if (el) {
              //     el.classList.remove("fallback-off")
              //     el.classList.add("fallback-on")
              //   }
              // }, 10)
            </script>
    </body>
  </html>`;
};
