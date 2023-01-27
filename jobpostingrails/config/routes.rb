Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :user
  resources :login
  resources :candidateprofile
  resources :job
  resources :logout
  get "searcheligible" , to:"job#searcheligible"
  get "count" , to:"job#count"
  get "countapp" , to:"job#countapp"
  post "apply" , to:"candidateapplication#create"
  get "appprofile" , to:"candidateapplication#index"
  post "changeapplicationstatus", to:"candidateapplication#modify"
  get "appliedjob" , to:"job#appliedjob"
  get "shortlisted" , to:"candidateapplication#shortlisted"
  get "offer" , to:"candidateapplication#offer"
  get "reject" , to:"candidateapplication#reject"
  get "interview" , to:"candidateapplication#interview"
  get "loggedin" , to:"user#loggedin"
  
  
end
