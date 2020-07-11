/** @format */

const { fixId, findUser, deleteUser } = require('./users');

describe('users', () => {
  describe('fixId', () => {
    test('should convert to integer the id param', () => {
      expect(fixId('100')).toBe(100);
    });
  });
  describe('findUser', () => {
    test('should return the user when the given user is valid', async () => {
      const user = await findUser(1);
      expect(user.id).toBe(1);
    });
  });
  describe('deleteUser', () => {
    test('should return the id when the given user is deleted', async () => {
      const user = await findUser(1);
      const deletedUser = await deleteUser(user.id);
      expect(deletedUser.id).toBe(1);
      try {
        await findUser(1);
      } catch (e) {
        expect(e).toBeTruthy();
      }
    });
  });
});
