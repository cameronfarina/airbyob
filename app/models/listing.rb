class Listing < ApplicationRecord
  validates :address, :city, :country, :price, :furnished, :description, presence: true

  belongs_to :user

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


end
