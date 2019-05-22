class Movie < ApplicationRecord
  include AlgoliaSearch

  validates :title, presence: true
  validates :image, presence: true
  validates :rating, numericality: { only_integer: true }, inclusion: {in: 0..5}

  algoliasearch do
    attributes :title, :image, :rating
    searchableAttributes ["title"]
  end
end
