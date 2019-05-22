class PagesController < ApplicationController
  def home
    @movies = Movie.all.sample(24)
  end
end
