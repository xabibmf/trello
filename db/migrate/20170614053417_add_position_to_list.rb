class AddPositionToList < ActiveRecord::Migration[5.0]
  def change
    add_column :lists, :position, :integer
  end
end
