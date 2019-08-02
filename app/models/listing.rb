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
    if self.same_city?(location).length > 1
      return self.same_city?(location) 
    elsif self.same_state?(location).length > 1
      return self.same_state?(location)
    elsif self.same_country?(location).length > 1
      return self.same_country?(location)
    end
  end
end
