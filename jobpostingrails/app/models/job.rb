class Job < ApplicationRecord
    validates :jobcode, :salary, presence: true
    
    end