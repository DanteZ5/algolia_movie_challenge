# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'json'
require 'open-uri'

Movie.destroy_all

Movie.create(title: "The Shawshank Redemption",
             image: "https://image.tmdb.org/t/p/w154/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
             rating: 5)

Movie.create(title: "Guardians of the Galaxy",
             image: "https://image.tmdb.org/t/p/w154/9gm3lL8JMTTmc3W4BmNMCuRLdL8.jpg",
             rating: 3)

Movie.create(title: "The Godfather",
             image: "https://image.tmdb.org/t/p/w154/d4KNaTrltq6bpkFS01pYtyXa09m.jpg",
             rating: 4)



url = "https://gist.githubusercontent.com/alexandremeunier/49533eebe2ec93b14d32b2333272f9f8/raw/924d89e2236ca6fa2ade7481c91bfbf858c49531/movies.json"
imported_movies = JSON.parse(open(url).read)
imported_movies.each do |movie|
  Movie.create(title: movie["title"],
               image: movie["image"],
               rating: movie["rating"] )
end




puts "#{Movie.count} movies in the db"
