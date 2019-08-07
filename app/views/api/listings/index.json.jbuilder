json.listings do
  @listings.each do |listing|
    json.set! listing.id do
      json.partial! 'listing', listing: listing
      json.commentIds []
    end
  end
end


json.listings do
  
  json.set! 'bounds', @bounds

end

