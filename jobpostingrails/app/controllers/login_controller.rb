class LoginController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        
    end
    def create
        usr = User.find_by('email': params[:email])
        if(usr.nil?)
            render json: "User Not Found"
        else
            if(usr.authenticate(params[:password]))
                session[:current_user_id] = usr.id
                puts usr
                prf=Candidateprofile.find_by('email': usr.email)
                puts prf.profilePic
                if(prf.nil?)
                    @curr_usr={:id => usr.id, :email => usr.email}
                else
                    @curr_usr={:id => usr.id, :email => usr.email,:pic => prf.profilePic}
                end
                    puts prf
                render json: @curr_usr
            else
                render json: "Incorrect Password"
            end 
        end
    end
end
