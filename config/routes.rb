Rails.application.routes.draw do  
  get "welcome/index"  
  get "login", to: 'login#index'
  root to: "welcome#index"  
end  
