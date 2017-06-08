class RemoveManagerToBoards < ActiveRecord::Migration[5.0]
  def change
    remove_column :boards, :manager, :string
  end
end
