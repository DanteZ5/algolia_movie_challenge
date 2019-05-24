class PagesController < ApplicationController
  def home
    movies = Movie.all.sample(24).to_json
    array = JSON.parse(movies)
    keepers = ["id", "title", "image", "rating"]
    array.each do |hash|
      hash.keep_if { |k,_| keepers.include? k }
      hash["objectID"] = hash.delete("id")
    end
    @movies = array.to_json
  end

  private

  def method
    keepers = [:id, :title, :image, :rating]
    movies = Movie.all.sample(24).map do |movie|
      movie = movie.attributes
      movie["objectId"] = movie.delete("id")
    end
  end

end
