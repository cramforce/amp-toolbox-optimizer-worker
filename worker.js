const AmpOptimizer = require("@ampproject/toolbox-optimizer");
const ampOptimizer = AmpOptimizer.create({
  fetch: (a, b) => {
    return fetch(a, b);
  }
});

export function install(backendHostname, requestFilter) {
  addEventListener("fetch", event => {
    const request = event.request;
    if (requestFilter) {
      if (!requestFilter(request)) {
        event.respondWith(fetch(request));
        return;
      }
    }
    event.respondWith(fetchAndApply(backendHostname, request));
  });

  async function fetchAndApply(backendHostname, request) {
    const url = new URL(request.url);
    if (backendHostname) {
      url.hostname = backendHostname;
    }
    const response = await fetch(url, request);
    const html = await response.text();
    const optimized = await ampOptimizer.transformHtml(html);
    return new Response(optimized, response);
  }
}
