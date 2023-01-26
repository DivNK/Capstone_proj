class CandidateapplicationController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create

        puts "******************User application Create***********************"
        curr_usr=User.find_by_id(session[:current_user_id])
        if(curr_usr.nil?)
            render json: "Not logged in"
        else
            
            
        
        p=Candidateapplication.create('user_id': curr_usr.id,'jobid': params[:jobid],
        'jobcode': params[:jobcode],
        'jobtitle': params[:jobtitle],
        'location': params[:location],
        'applieddate': params[:applieddate],
        'candidateappstatus': "Applied",
        'posteddate': params[:posteddate],
        'jobcode': params[:jobcode])

      render json: "Data Added"
    end
end
def modify
    
        ca=Candidateapplication.where(:jobid=>params[:jobid])
        
   
    p=ca.update('candidateappstatus': params[:candidateappstatus])

  render json: "Data Changed"

end

    def index

        curr_usr=User.find_by_id(session[:current_user_id])
        # curr_usr=User.find(1)
        puts session[:current_user_id]
        
        puts "*********************user application Display*********************************"
        puts curr_usr
        if(curr_usr.nil?)
            render json: "Not logged in"
        else
            jb=Candidateapplication.where(:user_id=>curr_usr.id)
        render json: jb
        end
        
     
    end

    def shortlisted
        curr_usr=User.find_by_id(session[:current_user_id])
        puts "***************Application Shortlisted************************"
        puts curr_usr
        if(curr_usr.nil?)
            render json: "Not logged in"
        else
            ca1=Candidateapplication.where(:user_id=> curr_usr.id,:candidateappstatus=> "Shortlisted")
            # ca1=Candidateapplication.where(:user_id=> curr_usr.id,:candidateappstatus=> "Rejected")
            render json: ca1
        end
    end

    def offer
        curr_usr=User.find_by_id(session[:current_user_id])
        puts "***************Application Shortlisted************************"
        if(curr_usr.nil?)
            render json: "Not logged in"
        else
            ca1=Candidateapplication.where(:user_id=> curr_usr.id,:candidateappstatus=> "Offer Recieved")
            render json: ca1
        end
    end
    def reject
        curr_usr=User.find_by_id(session[:current_user_id])
        puts "***************Application Shortlisted************************"
        if(curr_usr.nil?)
            render json: "Not logged in"
        else
            ca1=Candidateapplication.where(:user_id=> curr_usr.id,:candidateappstatus=> "Rejected")
            render json: ca1
        end
    end
end
