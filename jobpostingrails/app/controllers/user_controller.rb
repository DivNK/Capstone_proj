require 'bcrypt'
class UserController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create

        puts "******************User Create***********************"


      p=User.create('name': params[:name],
        'email': params[:email],
        'password': params[:password])
         
    #   puts p
      render json: "Data Added"
        e
end
def show
    v = User.all
    render json: v

end
end
