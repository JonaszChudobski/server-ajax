const crypto = require("crypto");

module.exports.createUuid = () => {
  return (String(1e7) + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (Number(c) ^ (crypto.randomBytes(1)[0] & (15 >> (Number(c) / 4)))).toString(
      16
    )
  );
};

module.exports.findElement = (data, user) => {
  account = data.get(user);
};

module.exports.putData = (data, user, body) => {
  data.set(user, body);
};

module.exports.deleteData = (data, user) => {
  data.delete(user);
};
