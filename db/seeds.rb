require 'json'
require 'open-uri'

Movie.destroy_all


url = "https://gist.githubusercontent.com/alexandremeunier/49533eebe2ec93b14d32b2333272f9f8/raw/924d89e2236ca6fa2ade7481c91bfbf858c49531/movies.json"
imported_movies = JSON.parse(open(url).read)
imported_movies.each do |movie|
  Movie.create(title: movie["title"],
               image: movie["image"],
               rating: movie["rating"] )
end

# Movie.algolia_reindex!
puts "#{Movie.count} movies in the db"
