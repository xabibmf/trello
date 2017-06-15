class Card < ApplicationRecord
  belongs_to :list
  acts_as_list scope: :list
  has_many :activities, dependent: :destroy
end
