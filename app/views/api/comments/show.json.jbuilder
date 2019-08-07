json.comment do 
  json.partial! '/api/comments/comment', comment: @comment
end

json.author do
  json.partial! '/api/users/user', user: @comment.author
end

json.average_rating @comment.listing.average_rating
