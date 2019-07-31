class Api::SuggestionsController < ApplicationController
  def index
    @suggestions = Listing.all_locations
    render json: @suggestions
  end
end