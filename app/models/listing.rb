class Listing < ApplicationRecord
  validates :address, :city, :country, :price, :description, :beds, :bathrooms, presence: true
  validates :furnished, inclusion: { in: [true, false]}

  has_many :booking_slots,
  foreign_key: :listing_id,
  class_name: :Booking

  has_many :comments

  def self.location_type(location)
    if location[1] && (location[1] == location[1].upcase)
      return 'US City'
    elsif location[1]
      return 'International City'
    else
      return 'Country'
    end
  end

  def self.get_listings(location)
    userLocation = location.split(', ')
    type = self.location_type(userLocation)
    if type == 'US City'
      return self.where('city = ? AND state = ? AND country = ?', userLocation[0], userLocation[1], 'United States')
    elsif type == 'International City'
      return self.where('city = ? AND country = ?', userLocation[0], userLocation[1]).or(self.where('country = ?', userLocation[1]))
    else
      return self.where('country = ?', userLocation[0])
    end
  end

  def self.get_bounds(listings)
    listing_max_lat = listings.first.latitude
    listing_max_lng = listings.first.longitude
    listing_min_lat = listings.first.latitude
    listing_min_lng = listings.first.longitude

    listings.each do |listing|
      if listing.latitude > listing_max_lat
        listing_max_lat = listing.latitude
      elsif listing.latitude < listing_min_lat
        listing_min_lat = listing.latitude
      end

      if listing.longitude > listing_max_lng
        listing_max_lng = listing.longitude
      elsif listing.longitude < listing_min_lng
        listing_min_lng = listing.longitude
      end
    end
    
    bounds = {northEastLat: listing_max_lat, southWestLng: listing_max_lng, southWestLat: listing_min_lat, northEastLng: listing_min_lng}
    return bounds
  end

  def self.in_our_bounds?(bounds)
    self.where("lat < ?", bounds[0])
      .where("lat > ?", bounds[2])
      .where("lng > ?", bounds[1])
      .where("lng < ?", bounds[3])
  end

end
