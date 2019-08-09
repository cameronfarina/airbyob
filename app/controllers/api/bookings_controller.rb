
class Api::BookingsController < ApplicationController
  before_action :require_logged_in, only: [:destroy]
  
  def index
    @bookings = Booking.includes(:listing)
      .where(user_id: current_user.id)
      .order(start_date: :asc)
  end
  
  def create
    @booking = Booking.new(booking_params)
    @booking.user_id = current_user.id
    @booking.listing_id = params[:booking][:listing_id]
    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    booking = current_user.bookings.find(params[:id])
    booking.destroy
    render :show
  end

  private
  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :num_guests, :listing_id, :user_id)
  end

    def does_not_overlap?(params)
    Booking.where(listing_id: params[:listing_id]).each do |booking|

      if (!(params[:start_date].to_s >= booking.end_date.to_s || params[:end_date].to_s <= booking.start_date.to_s))
        return false
      end
    end

    return true
  end

  def valid_booking?(booking_params)

    if (booking_params[:start_date].empty? || booking_params[:end_date].empty?)
      return false
    elsif (booking_params[:start_date].to_date < Date.current)
      return false
    elsif (booking_params[:start_date].to_date > booking_params[:end_date].to_date)
      return false
    end

    return does_not_overlap?(booking_params)
  end
end