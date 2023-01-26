require 'bcrypt'
class UserController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create

        puts "******************User Create***********************"


      p=User.create('email': params[:email],
        'password': params[:pwd],
        'usertype': "Student")
        cp=Candidateprofile.create('email': params[:email])
         
    #   puts p
      render json: "Data Added"
        
end
def index
    v = User.all
    render json: v

end
end
