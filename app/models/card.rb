class Card < ApplicationRecord
  belongs_to :list
  has_many :activities
end
