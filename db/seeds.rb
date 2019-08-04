# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Listing.delete_all
User.delete_all
Booking.delete_all

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
user1 = User.create!(email: "cam@gmail.com", password: "123456", name: "Cameron Farina")
user2 = User.create!(email: "tom@gmail.com", password: "123456", name: "Tom Farina")
user3 = User.create!(email: "jon@gmail.com", password: "123456", name: "Jon Farina")
user4 = User.create!(email: "jerry@gmail.com", password: "123456", name: "Jerry Farina")
user5 = User.create!(email: "demo@gmail.com", password: "123456", name: "Demo")



# Booking.create!(d
#   user_id: user1.id,
#   listing_id: data[0][:user_id],
#   start_date: "2019-07-22",
#   end_date: "2019-07-25",
#   num_guests: 2
# )

# Booking.create!(
#   user_id: user2.id,
#   listing_id: data[1][:user_id],
#   start_date: "2019-07-16",
#   end_date: "2019-07-29",
#   num_guests: 4
# )

# Booking.create!(
#   user_id: user3.id,
#   listing_id: data[2][:user_id],
#   start_date: "2019-07-11",
#   end_date: "2019-07-18",
#   num_guests: 3
# )

# Booking.create!(
#   user_id: user4.id,
#   listing_id: data[3][:user_id],
#   start_date: "2019-07-16",
#   end_date: "2019-07-19",
#   num_guests: 1
# )

# Booking.create!(
#   user_id: user5.id,
#   listing_id: data[4][:user_id],
#   start_date: "2019-07-30",
#   end_date: "2019-08-2",
#   num_guests: 5
# )