`@ampproject/toolbox-optimizer` on a CloudFlare worker.

- Had to patch `toolbox-runtime-version` to not use the `oneBehindFetch` which doesn't work in a CF worker.
- Example URL https://weathered-grass-5225.optimize-amp.workers.dev/climate-environment/2019/08/08/solving-climate-change-requires-fixing-forests-food-landmark-un-report-finds/?outputType=amp