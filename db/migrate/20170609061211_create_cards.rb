class CreateCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.string :name, null: false
      t.text :details
      t.references :list, null: false, foreign_key: true
      t.timestamps
    end
  end
end
