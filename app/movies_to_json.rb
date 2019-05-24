module MoviesToJson
  def movies_to_json(movies)
    movies = movies.sample(24).to_json
    array = JSON.parse(movies)
    keepers = ["id", "title", "image", "rating"]
    array.each do |hash|
      hash.keep_if { |k,_| keepers.include? k }
      hash["objectID"] = hash.delete("id")
    end
    return array.to_json
  end
end
