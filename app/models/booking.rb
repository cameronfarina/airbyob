class Booking < ApplicationRecord
  validates :user_id, :listing_id, :start_date, :end_date, :num_guests, presence: true
  validate :start_must_come_before_end
  validate :valid_booking_request

  belongs_to :user
  belongs_to :listing

  def valid_booking_request
    booking_slots = Booking
      .where(listing_id: listing_id)
      .where.not('start_date > :end_date OR end_date < :start_date', start_date: start_date, end_date: end_date)
    
    errors[:start_date] << 'This date has already been reserved' unless booking_slots.empty?
  end

  def start_must_come_before_end
    if start_date && end_date
      errors[:start_date] << 'start date must come before end date' if start_date > end_date
    end
  end
end
