class CreateActivities < ActiveRecord::Migration[5.0]
  def change
    create_table :activities do |t|
      t.text :memo, null: false
      t.references :card, null: false, foreign_key: true
      t.timestamps
    end
  end
end
