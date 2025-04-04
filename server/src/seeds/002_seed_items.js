exports.seed = async function(knex) {
  await knex('items').del();

  await knex('items').insert([
    {
      user_id: 1,
      item_name: 'The Legend of Zelda: Breath of the Wild',
      description: 'An open-world adventure game set in a vast fantasy land, featuring puzzles, exploration, and epic battles.',
      quantity: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: 1,
      item_name: 'Super Mario Odyssey',
      description: 'Join Mario on a globe-trotting adventure to rescue Princess Peach in a vibrant, open-world platformer.',
      quantity: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: 2,
      item_name: 'God of War',
      description: 'Follow Kratos and his son Atreus on a mythological journey through stunning landscapes and epic battles.',
      quantity: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: 2,
      item_name: 'Red Dead Redemption 2',
      description: 'Experience an epic tale of life as an outlaw in the American frontier, filled with immersive storylines and rich detail.',
      quantity: 4,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: 3,
      item_name: 'Cyberpunk 2077',
      description: 'A futuristic open-world RPG set in the dystopian Night City, blending deep narrative and fast-paced action.',
      quantity: 6,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: 3,
      item_name: 'Halo Infinite',
      description: 'Master Chief returns in this first-person shooter, featuring a sprawling campaign and robust multiplayer modes.',
      quantity: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: 4,
      item_name: 'Final Fantasy VII Remake',
      description: 'A modern reimagining of the classic RPG, with stunning graphics, reworked combat, and an emotional narrative.',
      quantity: 4,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: 4,
      item_name: 'Assassin’s Creed Valhalla',
      description: 'Step into the world of the Vikings in this action-packed RPG, exploring vast landscapes and epic battles.',
      quantity: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: 2,
      item_name: 'Resident Evil Village',
      description: 'Dive into the horror-filled world of Resident Evil with terrifying creatures and a gripping storyline.',
      quantity: 2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: 1,
      item_name: 'Minecraft',
      description: 'A sandbox game that lets you build and explore endless worlds. Perfect for creative minds and adventurers alike.',
      quantity: 10,
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);
};
