class JobController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create

        puts "******************Job Create***********************"


      p=Job.create('jobTitle': params[:jobTitle],
        'jobDescription': params[:jobDescription],
        'companyName': params[:companyName],
        'location': params[:location],
        'salary': params[:salary],
        'postedDate': params[:postedDate],
        'domain': params[:domain],
        'jobCode': params[:jobCode],
        'jobType': params[:jobType],
        'skillsRequired': params[:skillsRequired],
        'applicationStatus': params[:applicationStatus])

      render json: "Data Added"
        
end
    def index

        curr_usr=User.find_by_id(session[:current_user_id])
        # curr_usr=User.find(1)
        puts session[:current_user_id]
        
        puts "*********************Job Display*********************************"
        puts curr_usr
        if(curr_usr.nil?)
            render json: "Not logged in"
        else
            jb=Job.all
        render json: jb
        end
        
     
    end
    def count

        curr_usr=User.find_by_id(session[:current_user_id])
        # curr_usr=User.find(1)
        puts session[:current_user_id]
        
        puts "*********************Job Display*********************************"
        puts curr_usr
        if(curr_usr.nil?)
            render json: "Not logged in"
        else
            jb=Job.all
        render json: jb
        end
        
     
    end
    def searcheligible
        arr1=[1,2,3,4,5,6,1,2,3]
        curr_usr=User.find_by_id(session[:current_user_id])
        # curr_usr=User.find(1)
        puts session[:current_user_id]
        
        puts "*********************Job Display*********************************"
        puts curr_usr
        if(curr_usr.nil?)
            render json: "Not logged in"
        else
            cp=Candidateprofile.where(:email=> curr_usr.email)
         puts cp

            final=[]
           
            if (",".in? cp.first.skills )
                
                str= cp.first.skills.split(",")
                str.each do |i|
                    jb=Job.where("skillsrequired LIKE '%#{i}%'")
                    
                    final=final+jb
                end
            else
                str=[cp.first.skills]
                final=Job.where("skillsrequired LIKE '%#{str}%'")
            end
            puts final.size
            render json: final
        end
     
    end
end
users = User.where("(first_name = 'James' and last_name = 'Scott') or email = 'james@gmail.com'")
