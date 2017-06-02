class CreateBoards < ActiveRecord::Migration[5.0]
  def change
    create_table :boards do |t|
      t.string :manager, null: false
      t.string :name, null: false
      t.string :contracting
      t.string :website
      t.text :details
      t.string :color, null: false, default: 'blue'
      t.timestamps
    end
  end
end
