class Job < ApplicationRecord
    validates :jobCode, :salary, presence: true
    
    end