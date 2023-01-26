class User < ApplicationRecord
    has_secure_password
    has_many :candidateapplications
    validates :email, :password, presence: true
    
end