class Movie < ApplicationRecord
  include AlgoliaSearch
  before_save :default_image

  validates :title, presence: true, uniqueness: true
  validates :rating, numericality: { only_integer: true }, inclusion: {in: 0..5}

  algoliasearch do
    attributes :title, :image, :rating
    searchableAttributes ["title"]
  end

  def default_image
    self.image ||= 'https://image.tmdb.org/t/p/w154/tuAI9fT8AzakI5w4V1KZyUEvuDW.jpg' # note self.status = 'P' if self.status.nil? might be safer (per @frontendbeauty)
  end

  def self.to_json(movies)
    movies = movies.sample(24).to_json
    array = JSON.parse(movies)
    keepers = ["id", "title", "image", "rating"]
    array.each do |hash|
      hash.keep_if { |k,_| keepers.include? k }
      hash["objectID"] = hash.delete("id")
    end
    return array.to_json
  end
end
