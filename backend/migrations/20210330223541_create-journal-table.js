
exports.up = function(knex) {
    return knex.schema.createTable('journalArticles', (table) => {
        table.increments()
        table.string('title')
        table.string('date')
        table.text('body')
        table.string('slug')
        table.string('image_1_url')
        table.string('image_2_url')
        table.string('image_3_url')
        table.string('image_4_url')
        table.string('image_5_url')
        table.string('image_6_url')
        table.string('image_7_url')
        table.string('image_8_url')
        table.string('image_9_url')
        table.string('image_10_url')
        table.string('image_11_url')
        table.string('image_12_url')
        table.string('image_13_url')
        table.string('image_14_url')
        table.string('image_15_url')
        table.string('image_16_url')
        table.string('image_17_url')
        table.string('image_18_url')
        table.string('image_19_url')
        table.string('image_20_url')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('journalArticles')
};
