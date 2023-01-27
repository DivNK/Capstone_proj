require 'bcrypt'
class UserController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create

        puts "******************User Create***********************"


      p=User.create('email': params[:email],
        'password': params[:password],
        'usertype': "Student")
        cp=Candidateprofile.create('email': params[:email])
         
    #   puts p
      render json: "Data Added"
        
end
def show
    v = User.all
    render json: v

end
def loggedin
  curr_usr=User.find_by_id(session[:current_user_id])
        # curr_usr=User.find(1)
        puts session[:current_user_id]
        if(curr_usr.nil?)
          curr={:status=> false }
      else
          
        prf=Candidateprofile.find_by('email': curr_usr.email)
        puts prf.profilePic
        if(prf.nil?)
            curr={:status=> true,:id => curr_usr.id, :email => curr_usr.email}
        else
            curr={:status=> true, :id => curr_usr.id, :email => curr_usr.email,:pic => prf.profilePic}
        end
      end
      render json: curr
end

end
