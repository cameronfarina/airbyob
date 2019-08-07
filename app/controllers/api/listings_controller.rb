class Api::ListingsController < ApplicationController
  before_action :require_logged_in, only: [:create]
  before_action :require_ownership, only: [:edit, :update, :destroy]

  def index
    if (params[:filter].class.to_s == 'Hash')
      answer = bounds
    else
      answer = location
    end

    listings = answer ? Listing.get_listings(answer) : Listing.first(5)
    @listings = listings.includes(:comments)
    
    @bounds = Listing.get_bounds(@listings)
  end

  def show
    @listing = Listing.includes(:comments).find(params[:id])
  end

  def create
    @listing = Listing.new(listing_params)
    if @listing.save
      render 'api/listings/show'
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def edit
    @listing = Listing.find(params[:id])
  end
  
  def update
    @listing = Listing.find(params[:id])

    if @listing.update_attributes(listing_params)
      redirect_to listing_url(@listing)
    else
      render json: @listing.errors.full_messages
      render :edit
    end
  end

  def destroy
    @listing = Listing.find(params[:id])
    @listing.destroy
    redirect_to listings_url
  end

  private
  def listing_params
    params.require(:listing).permit(
      :address, 
      :city, 
      :state, 
      :country, 
      :price, 
      :furnished, 
      :latitude, 
      :longitude, 
      :description,
      :beds,
      :bathrooms,
      :location
    )
  end

  def bounds
    params[:filter][:bounds]
  end

  def location
    params[:filter]
  end

end
