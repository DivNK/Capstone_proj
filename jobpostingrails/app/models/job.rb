class Job < ApplicationRecord
    validates :jobCode, :compensation, presence: true
    
    end