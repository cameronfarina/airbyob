json.listing do
  json.partial! '/api/listings/listing', listing: @listing
  json.commentIds @listing.comments.pluck(:id)
end

@listing.comments.includes(:author).each do |comment|
  json.comments do
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end

  json.authors do
    json.set! comment.author.id do
      json.extract! comment.author, :id, :email
    end
  end
end

