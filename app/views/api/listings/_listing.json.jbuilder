json.extract! listing, :id, :description, :latitude, :longitude, :price, 
:furnished, :address, :city, :state, :country, :beds, :bathrooms, :average_rating

json.booked_dates listing.booked_dates
json.average_rating listing.average_rating
json.comments listing.comments