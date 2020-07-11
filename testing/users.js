/** @format */

const users = Array(20)
  .fill(undefined)
  .map((_, k) => ({
    id: k,
    createdAt: new Date(),
    email: `testingwithnode.${k}@email.io`,
  }));

const fixId = (id) => parseInt(id);

const findUser = (id) =>
  new Promise((resolve, reject) => {
    const userId = fixId(id);
    const user = users.find((user) => user.id == userId);
    if (!user) {
      reject(new Error(`User with ${id} not found`));
    }
    resolve(user);
  });

const deleteUser = (id) =>
  new Promise((resolve, reject) => {
    const _id = fixId(id);
    const i = users.findIndex((user) => user.id === _id);
    if (i < 0) {
      reject(new Error(`User with ${id} not found`));
    }
    users.splice(i, 1);
    resolve({ id: i });
  });

module.exports = {
  users,
  fixId,
  findUser,
  deleteUser,
};
