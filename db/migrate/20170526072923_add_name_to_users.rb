class AddNameToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :name, :string, null: false
    add_column :users, :initial, :string, null: false
    add_column :users, :self_introduction, :text
  end
end
