@bookings.each do |booking|
  json.set! booking.id do 
    json.extract! booking, :id, :user_id, :listing_id, :start_date, :end_date, :num_guests
    json.extract! booking.listing, :description, :latitude, :longitude, :city, :state, :country, :furnished, :address, :beds, :bathrooms, :price
  end
end