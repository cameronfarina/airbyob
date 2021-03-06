class User < ApplicationRecord
  attr_reader :password

  validates :password_digest, :session_token, :name, :email, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :email, uniqueness: true

  after_initialize :ensure_session_token
  
  has_many :bookings,
  foreign_key: :user_id,
  class_name: :Booking

  has_many :comments,
  foreign_key: :author_id,
  class_name: :Comment
  
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end
end
