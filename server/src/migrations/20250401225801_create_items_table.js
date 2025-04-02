

exports.up = function(knex) {
    return knex.schema.createTable('items', (table) => {
      table.increments('id').primary();
      // Define the foreign key inline for clarity:
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
      table.string('item_name').notNullable();
      table.text('description').notNullable();
      table.integer('quantity').notNullable().defaultTo(0);
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('items');
  };
  