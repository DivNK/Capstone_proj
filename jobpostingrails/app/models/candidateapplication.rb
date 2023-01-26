class Candidateapplication < ApplicationRecord
    belongs_to :user
    validates :jobcode, presence: true   
    end