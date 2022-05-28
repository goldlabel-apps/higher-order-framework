export const serviceWorker = (req): string => {
  if (req.hostname === "localhost") return "";
  return `  <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          navigator.serviceWorker.register('/service-worker.js')
          .then(function(registration) {
          }, function(err) {
          });
        });
      }
    </script>`;
};
