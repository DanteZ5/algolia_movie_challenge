require 'json'
require 'open-uri'
puts 'destroying...'

movie_count = Movie.all
Movie.destroy_all

puts "#{movie_count} movies deleted from the db"
puts '---'
puts 'loading...'

url = "https://gist.githubusercontent.com/alexandremeunier/49533eebe2ec93b14d32b2333272f9f8/raw/924d89e2236ca6fa2ade7481c91bfbf858c49531/movies.json"
imported_movies = JSON.parse(open(url).read)
imported_movies.each do |movie|
  Movie.create(title: movie["title"],
               image: movie["image"],
               rating: movie["rating"] )
end

Movie.reindex!

puts "#{Movie.count} movies in the db"
