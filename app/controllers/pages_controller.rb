

class PagesController < ApplicationController
  def home
    @movies = Movie.all.sample(20)
  end
end
