class Api::CommentsController < ApplicationController
  before_action :require_logged_in, except: [:index]
  before_action :require_ownership, only: [:edit, :update, :destroy]

  def index
    @comments = Comment.all
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    @comment.listing_id = params[:listing_id]
    if @comment.save
      render 'api/listings/show/'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def edit
    @comment = Comment.find_by(params[:id])
  end

  def update
    @comment = Comment.find_by(params[:id])
    if @comment.update_attributes(comment_params)
      redirect_to comment_url(@comment)
    else
      render json: @comment.errors.full_messages
      render :edit
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
    @comment.destroy
    render json: @comment.errors.full_messages, status: 422
  end

  private
  def comment_params
    params.require(:comment).permit(:rating, :body)
  end
end