require 'bcrypt'
class CandidateprofileController < ApplicationController
    skip_before_action :verify_authenticity_token

def index 
       
    # usr = User.find_by('email': params[:email])
    #     if(usr.nil?)
    #         render json: "User Not Found"
    #     else
    #         if(usr.authenticate(params[:password]))
    #             session[:current_user_id] = usr.id
    #             puts usr
    #             prf=Candidateprofile.find_by('email': usr.email)
    #             render json: prf

    prf=Candidateprofile.find(1);
                 render json: prf
 end   

 def show 
       
    v= Candidateprofile.find(params[:id]) 
    render json: v
    
 end   

 def update 
    # usr = User.find_by('email': params[:email])
    #     if(usr.nil?)
    #         render json: "User Not Found"
    #     else
    #         if(usr.authenticate(params[:password]))
    #             session[:current_user_id] = usr.id
                # puts usr
                prf=Candidateprofile.find_by('email': params[:email])
                # prf=Candidateprofile.find(1);
                puts params[:email]
                puts prf
    prf.update('firstName': params[:firstName],'lastName': params[:lastName], 'contact': params[:contact],'address': params[:address],'about': params[:about],'currentCompany': params[:currentCompany],'ctc': params[:ctc],'experience': params[:experience],'currentRole': params[:currentRole],'skills': params[:skills],'expectedSalary': params[:expectedSalary],'preferredLocation': params[:preferredLocation],'resumeLink': params[:resumeLink],'profilePic': params[:profilePic])
    render json: "Data is Updated"
end
end