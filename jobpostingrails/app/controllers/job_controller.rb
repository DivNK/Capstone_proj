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
        
        puts "*********************Job Count*********************************"
        puts curr_usr
        if(curr_usr.nil?)
            render json: "Not logged in"
        else
            ajb=Job.all.size
            cp=Candidateprofile.where(:email=> curr_usr.email)
            ca=Candidateapplication.where(:user_id=> curr_usr.id)
           
            final=[]
           jb=""
            if (",".in? cp.first.skills )
                
                str= cp.first.skills.split(",")
                str.each do |i|
                    jb=jb+"skillsrequired LIKE '%#{i}%'" + " or "
                    puts i
                    # final=final+jb
                end
            else
                str=[cp.first.skills]
                jb="skillsrequired LIKE '%#{str}%'" + " or "
            end
            jb=jb[0...-4]
            puts jb
            eligible=Job.where(jb).size
           
            applied=ca.size
            
            puts "**************End count***********************"
            render json: {"alljob":ajb,"eligiblejob":eligible,"appliedjob":applied}
        end
        
     
    end

    def countapp

        curr_usr=User.find_by_id(session[:current_user_id])
        # curr_usr=User.find(1)
        puts session[:current_user_id]
        
        puts "*********************Job User status Count*********************************"
        puts curr_usr
        if(curr_usr.nil?)
            render json: "Not logged in"
        else

            ca1=Candidateapplication.where(:user_id=> curr_usr.id,:candidateappstatus=> "Shortlisted")
            ca2=Candidateapplication.where(:user_id=> curr_usr.id,:candidateappstatus=> "Interviewing")
            ca3=Candidateapplication.where(:user_id=> curr_usr.id,:candidateappstatus=> "Rejected")
            ca4=Candidateapplication.where(:user_id=> curr_usr.id,:candidateappstatus=> "Offer Recieved")
        
            shjb=ca1.size
            ijb=ca2.size
            rjb=ca3.size
            oljb=ca4.size
            puts "**************End ob User status Count***********************"
            render json: {"shotlisted":shjb,"Interviewing":ijb,"Rejected":rjb,"OfferLetter":oljb}
        end
        
     
    end


    def searcheligible
        
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
                    puts i
                    final=final+jb
                end
            else
                str=[cp.first.skills]
                final=Job.where("skillsrequired LIKE '%#{str}%'")
            end
            puts "**************End Job display***********************"

            
            render json: final
        end
     
    end

    def appliedjob
        curr_usr=User.find_by_id(session[:current_user_id])
        # curr_usr=User.find(1)
        puts session[:current_user_id]
        
        puts "*********************Applied Job Display*********************************"
        puts curr_usr
        if(curr_usr.nil?)
            render json: "Not logged in"
        else
            cp=Candidateapplication.where(:user_id=> curr_usr.id)
            final=[]
            cp.each do |i|
                jb=Job.where(:id=>i.jobid)
                final=final+jb
            end


        end
        render json: final
    
    end
end

