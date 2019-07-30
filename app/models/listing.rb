class Listing < ApplicationRecord
  validates :address, :city, :country, :price, :furnished, :description

  belongs_to :user
end
