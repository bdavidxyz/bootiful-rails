Rails.application.routes.draw do  
  resources 'login', only: [:index, :create]
  resources 'signup', only: [:index, :create]

  get "welcome/index"  
  root to: "welcome#index"  

  resources 'admin', only: [:index]


end  
