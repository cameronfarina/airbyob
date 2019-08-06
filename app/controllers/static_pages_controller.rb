class StaticPagesController < ApplicationController
  def root
    @api_key =  Rails.env.development? ? Rails.application.credentials.google[:development] : Rails.application.credentials.google[:production]
  end
end