class Movie < ApplicationRecord
  validates :title, presence: true
  validates :image, presence: true
  validates :rating, numericality: { only_integer: true }, inclusion: {in: 0..5}
end
