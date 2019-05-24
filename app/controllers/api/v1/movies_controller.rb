class Api::V1::MoviesController < ActionController::Base
  def create
    movie = Movie.new(movie_params)
    if movie.save
      render json: Movie.to_json([movie])
    else
      render json: {
        status: 'error',
        message: movie.errors
      }
    end
  end

  def destroy
    puts 'destroy is reached'
    movie = Movie.find(params[:id])
    movie.destroy
    render json: movie
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :rating, :image)
  end
end
