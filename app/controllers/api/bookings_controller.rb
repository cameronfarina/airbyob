
class Api::BookingsController < ApplicationController
  def index
    @bookings = Booking.where(user_id: current_user.id).includes(:listing)
  end
  
  def create
    @booking = Booking.new(booking_params)
    @booking.user_id = current_user.id
    
    if @booking.save
      render json: @booking
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
    render json: @booking.id
  end

  private
  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :num_guests)
  end
end