class Listing < ApplicationRecord
  validates :address, :city, :country, :price, :description, :beds, :bathrooms, presence: true
  validates :furnished, inclusion: { in: [true, false]}

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end

  def self.same_city?(city)
    self.where('city = ?', city)
  end

  def self.same_state?(state)
    self.where('state = ?', state)
  end

  def self.same_country?(country)
    self.where('country = ?', country)
  end

  def self.price_in_range?(range)
    self.where('price < ?', range)
  end

  def self.all_locations
    self.pluck('city', 'country', 'state').uniq
  end

  def self.same_location?(location)
    if self.same_city?(location).length > 0
      return self.same_city?(location) 
    elsif self.same_state?(location).length > 0
      return self.same_state?(location)
    elsif self.same_country?(location).length > 0
      return self.same_country?(location)
    end
  end

  def self.location_type(splat)
    if splat[1] && (splat[1] == splat[1].upcase)
      return 'US'
    elsif splat[1]
      return 'City'
    else
      return 'Country'
    end
  end

  def self.get_listings(location)
    splat = location.split(', ')
    type = self.location_type(splat)

    if type == 'US'
      return self.where('city = ? AND state = ?', splat[0], splat[1])
    elsif type == 'City'
      return self.where('city = ? AND country = ?', splat[0], splat[1])
    else
      return self.where('country = ?', splat[0])
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
