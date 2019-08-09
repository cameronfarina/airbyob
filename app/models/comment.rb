class Comment < ApplicationRecord
  validates :body, presence: true
  validates :rating, inclusion: { in: (1..5) }

  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :listing
end
