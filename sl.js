const agent = require('@shiftleft/agent').default;

const ready = new Promise((resolve) => {
  new agent().startAgent(() => {
    resolve(require('./handler.js'));
  });
});

module.exports.gimmetime = async (event) => {
  const handler = await ready;
  const response = await handler.gimmetime(event);
  return response;
};

