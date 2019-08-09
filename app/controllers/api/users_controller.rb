class Api::UsersController < ApplicationController
  def index
    @users = User.find(params[:id])
    render :show
  end

  def show
    @user = User.find(params[:id])
    @listings = @user.listings
    @bookings = @user.bookings
    @comments = @user.comments

    if @user
      render 'api/users/show'
    else
      render json: ['User could not be found'], status: 404
    end
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :password, :email)
  end
end
