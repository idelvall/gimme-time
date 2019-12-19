const moment = require('moment-timezone');

function createResponse(tz) {
  return {
    headers: { 'content-type': 'text/html' },
    statusCode: '200',
    body: `The time in ${tz} is: ${moment.tz(tz).format()}`
  };
}
function createErrorResponse(tz) {
  return {
    headers: { 'content-type': 'text/html' },
    statusCode: '400',
    body: `Unknown timezone ${tz}`
  };
}
module.exports.gimmetime = async (event) => {
  let tz = 'Europe/Rome';
  if (event.queryStringParameters && event.queryStringParameters.tz) {
    tz = event.queryStringParameters.tz;
    if (!moment.tz.names().includes(tz)) {
      return createErrorResponse(tz);
    }
  }
  return createResponse(tz);
};
