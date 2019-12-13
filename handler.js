const moment = require('moment-timezone');
const agent = require('@shiftleft/agent').default;

const ready = new Promise((resolve) => {
  new agent().startAgent(() => {
    resolve();
  });
});

module.exports.gimmetime = async (event) => {
  await ready;
  let tz = 'Europe/Rome';
  if (event.queryStringParameters && event.queryStringParameters.tz) {
    tz = event.queryStringParameters.tz;
    if (!moment.tz.names().includes(tz)) {
      return {
        headers: { 'content-type': 'text/html' },
        statusCode: '400',
        body: `Unknown timezone ${tz}`
      };
    }
  }
  return {
    headers: { 'content-type': 'text/html' },
    statusCode: '200',
    body: `The time in ${tz} is: ${moment.tz(tz).format()}`
  };
};
