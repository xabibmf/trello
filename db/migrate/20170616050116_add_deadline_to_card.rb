class AddDeadlineToCard < ActiveRecord::Migration[5.0]
  def change
    add_column :cards, :deadline, :date
  end
end
