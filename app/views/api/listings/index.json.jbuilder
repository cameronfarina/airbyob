json.listings do
  @listings.each do |listing|
    json.set! listing.id do
      json.partial! 'listing', listing: listing
    end
  end
end


json.listings do
  
  json.set! 'bounds', @bounds

end
  # json.northEastLat = @bounds[0]
  # json.southWestLat = @bounds[2]
  # json.southWestLng = @bounds[1]
  # json.northEastLng = @bounds[3]

