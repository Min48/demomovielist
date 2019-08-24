// import * as Sentry from "@sentry/browser";
function init() {
  //   Sentry.init({
  //     dsn: "https://f69f3dec48e14c3b9004e7ca8a2a3012@sentry.io/1533776"
  //   });
}

function log(error) {
  console.log(error);
  // Sentry.captureEvent(error);
}

export default {
  init,
  log
};
