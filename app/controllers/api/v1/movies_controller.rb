class Api::V1::MoviesController < ActionController::Base
  def create
  end

  def destroy
    puts 'destroy is reached'
    movie = Movie.find(params[:id])
    movie.destroy
    render json: movie
  end
end
