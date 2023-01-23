class LoginController < ApplicationController
    # skip_before_action :verify_authenticity_token
    def index
        
    end
    def create
        usr = User.find_by('email': params[:email])
        if(usr.nil?)
            render json: "user not found"
        else
            if(usr.authenticate(params[:password]))
                session[:current_user_id] = usr.id
                render json: "Login successful"
            else
                render json: "Incorrect password"
            end 
        end
    end
end
