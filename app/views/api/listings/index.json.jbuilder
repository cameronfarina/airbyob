@listings.each do |listing|
  json.set! listing.id do
    json.partial! 'listing', listing: listing
  end
end

json.bounds do
  json.northEastLat = @bounds[0]
  json.southEastLng = @bounds[0]
  json.southEastLat = @bounds[0]
  json.southEastLng = @bounds[0]
end
