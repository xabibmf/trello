class Board < ApplicationRecord
  belongs_to :user
  has_many :lists, -> { order(position: :asc) }
end
