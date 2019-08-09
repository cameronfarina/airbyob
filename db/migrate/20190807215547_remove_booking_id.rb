class RemoveBookingId < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :booking_id
  end
end
