# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Listing.delete_all

require 'csv'
data = CSV.foreach("#{Rails.root}/db/MOCK_DATA.csv").map do |row|

    {
      address: row[0], 
      city: row[1], 
      state: row[2], 
      country: row[3],
      price: row[4],
      latitude: row[5], 
      longitude: row[6], 
      furnished: row[7], 
      user_id: row[8], 
      description: row[9], 
      beds: row[10],
      bathrooms: row[11]
    }

end

Listing.create!(data)

# Listing.create(address: 480 Morning Avenue,Wiwilí,,Nicaragua,98.60,13.621654,-85.8255855,true,994,Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.,4,2)