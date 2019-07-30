@listings.each do |bench|
  json.set! listing.id do
    json.partial! 'listing', listing: listing
  end
end
