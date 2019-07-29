# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'
data = CSV.foreach("#{Rails.root}/db/MOCK_DATA.csv").map do |row|

    {
      address: row[1], 
      city: row[2], 
      state: row[3], 
      country: row[4], 
      latitude: row[5], 
      longitude: row[6], 
      furnished: row[7], 
      user_id: row[8], 
      description: row[9], 
      price: row[10]
    }

end

Listing.create(data)