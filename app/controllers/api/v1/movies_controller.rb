class Api::V1::MoviesController < ActionController::Base
  def index
    @movies = Movie.order(rating: :desc)
    render json: @movies
  end
end
