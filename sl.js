const agent = require('@shiftleft/agent').default;

const ready = new Promise((resolve) => {
  new agent().startAgent(() => {
    resolve(require('./handler.js'));
  });
});

module.exports.gimmetime = async (event) => {
  const handler = await ready;
  const response = await handler.gimmetime(event);
  console.log("result " + JSON.stringify(response))
  return response;
};

 const event = {
      queryStringParameters: {
      tz:"<hello>"
      }
    };
 let result = module.exports.gimmetime(event);
