
exports.up = function(knex) {
  return (knex.schema
    .createTable('project', tbl => {
        tbl.increments();
        tbl.string('project_name', 128).notNullable();
        tbl.string('project_desc');
        tbl.boolean('project_completed').notNullable().defaultTo(false);
    })
    .createTable('resource', tbl => {
        tbl.increments();
        tbl.string('resource_name', 128).notNullable();
        tbl.string('resource_desc');
    })
    .createTable('task', tbl => {
        tbl.increments();
        tbl.string('task_desc').notNullable();
        tbl.string('task_notes');
        tbl.boolean('task_completed').notNullable().defaultTo(false);
        tbl.integer('project_id')
            .notNullable()
            .unsigned()
            .references('project.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
    .createTable('project_resource', tbl => {
        tbl.increments();
        tbl.integer('project_id')
            .notNullable()
            .unsigned()
            .references('project.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('resource_id')
            .notNullable()
            .unsigned()
            .references('reference.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
  )};

exports.down = function(knex) {
  return (knex.schema
        .dropTableIfExists('project_resource')
        .dropTableIfExists('task')
        .dropTableIfExists('resource')
        .dropTableIfExists('project')
  );
};
