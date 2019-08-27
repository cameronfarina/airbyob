class Booking < ApplicationRecord
  validates :user_id, :listing_id, :start_date, :end_date, :num_guests, presence: true
  validate :no_conflicting_dates

  belongs_to :user
  belongs_to :listing

  def no_conflicting_dates
    date = self.start_date
    while(date <= self.end_date)
      if self.listing.booked_dates.include?(date)
        errors[:Request] << 'conflicts with existing bookings'
        return
      end
      date += 1
    end
  end
end