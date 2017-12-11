
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bears', function(tbl){
        tbl.increments('id');
        tbl.integer('zooid')
            .notNullable()
            .references('id')
            .inTable('zoos');
        tbl.string('species', 80).notNullable().unique('name', 'uq_zoo_name');
        tbl.string('latinName', 80).notNullable();
        tbl.timestamp('createsAt').defaultTo(knex.fn.now());

    });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bears');
};
