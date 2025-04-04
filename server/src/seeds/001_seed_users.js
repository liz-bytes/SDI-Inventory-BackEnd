const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.seed = async function(knex) {

  await knex('users').del();

  const hashedPassword1 = await bcrypt.hash('plaintextpassword1', saltRounds);
  const hashedPassword2 = await bcrypt.hash('plaintextpassword2', saltRounds);
  const hashedPassword3 = await bcrypt.hash('plaintextpassword3', saltRounds);
  const hashedPassword4 = await bcrypt.hash('plaintextpassword4', saltRounds);

  await knex('users').insert([
    {
      first_name: 'Alice',
      last_name: 'Anderson',
      username: 'alice_a',
      password: hashedPassword1,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Bob',
      last_name: 'Brown',
      username: 'bob_b',
      password: hashedPassword2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'Carol',
      last_name: 'Clark',
      username: 'carol_c',
      password: hashedPassword3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: 'David',
      last_name: 'Dawson',
      username: 'david_d',
      password: hashedPassword4,
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);
};
