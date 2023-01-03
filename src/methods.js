export const postData = (req, res) => {
  data.push({ userId: idCounter, user: req.body });
  idCounter += 1;
  res.status(201).send(data);
};

export const putData = (req, res) => {
  const user = req.params.user;
  const account = data.map((element) => {
    element.userId === user;
  });
  const userIndex = data
    .map((element) => {
      return element.userId;
    })
    .indexOf(Number(user));
  if (!account) {
    return res.status(404).json({ error: "User does not exist" });
  }
  data[userIndex]['user'] = req.body;
  res.status(201).send(data);
};

export const deleteData = (req, res) => {
  const user = req.params.user;
  const account = data.map((element) => {
    element.userId === user;
  });
  const userIndex = data
    .map((element) => {
      return element.userId;
    })
    .indexOf(Number(user));
  if (!account) {
    return res.status(404).json({ error: "User does not exist" });
  }
  data.splice(userIndex, 1);
  res.send(JSON.stringify(data));
};