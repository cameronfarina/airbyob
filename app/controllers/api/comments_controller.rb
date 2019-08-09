class Api::CommentsController < ApplicationController
  # before_action :require_ownership, only: [:edit, :update, :destroy]

  def create
    @comment = current_user.comments.new(comment_params)
    @comment.listing_id = params[:listing_id]
    if @comment.save
      @listing = @comment.listing
      render 'api/listings/show'
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
  end

  def destroy
    comment = current_user.comments.find(params[:id])
    @listing = comment.listing
    if comment.delete
      render json: { id: comment.id }
    else
      render json: comment.errors.full_messages
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:rating, :body, :listing_id)
  end
end