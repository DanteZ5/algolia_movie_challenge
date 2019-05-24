class PagesController < ApplicationController
  def home
    @movies = Movie.to_json(Movie.all)
  end
end
