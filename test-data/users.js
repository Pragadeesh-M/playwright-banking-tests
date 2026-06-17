const users = {
  valid: {
    username: 'john',
    password: 'demo',
  },
  invalid: {
    username: 'invaliduser_xyz',
    password: 'wrongpass123',
  },
};

const payee = {
  name: 'Jane Smith',
  address: '123 Main St',
  city: 'Springfield',
  state: 'IL',
  zip: '62701',
  phone: '5551234567',
  account: '12345',
  amount: 50,
};

module.exports = { users, payee };
