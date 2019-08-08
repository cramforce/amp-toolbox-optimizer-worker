import { install } from "./worker.js";

install("beta.washingtonpost.com", request => {
  return /outputType=amp/.test(request.url);
});
