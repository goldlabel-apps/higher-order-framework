export const finish = (version: string) => {
  return `  <script>
              System.import('@listingslab/root-config');
              // console.warn("ssr ${version}");
            </script>
  </body>
</html>`;
};

/*
// setTimeout(() => {
//   var el = document.getElementById("ssrDiv");
//   if (el) {
//     el.classList.remove("fallback-off");
//     el.classList.add("fallback-on");
//   }
// }, 1000);
*/
