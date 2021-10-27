Rails.application.routes.draw do  
  get "welcome/index"  
  resources 'login', only: [:index, :create]
  resources 'signup', only: [:index, :create]
  root to: "welcome#index"  
end  
