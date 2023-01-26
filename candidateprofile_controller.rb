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
    #             puts usr
                # prf=Candidateprofile.find_by('email': usr.email)
                prf=Candidateprofile.find(1);
    prf.update('fname': params[:fname],'lname': params[:lname], 'phone': params[:phone],'address': params[:address],'about': params[:about],'currentorg': params[:currentorg],'currentctc': params[:currentctc],'experience': params[:experience],'role': params[:role],'skills': params[:skills],'expectedctc': params[:expectedctc],'location': params[:location],'cvlink': params[:cvlink],'pic': params[:pic])
    render json: "Data is Updated"
end
end

