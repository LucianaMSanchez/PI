const { User, conn } = require('../../src/db.js');


describe('User model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => User.sync({ force: true })); 
    describe('email', () => {
      it('should throw an error if email is not an email', (done) => {
        User.create({}) 
          .then(() => done(new Error('It requires a valid email')))
          .catch(() => done());
      });
      it('should work when its a valid email', () => {
        User.create({ email: 'lu@gmail.com' });
      });
    });
  });
});