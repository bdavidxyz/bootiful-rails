Rails.application.routes.draw do  
  resources 'login', only: [:index, :create]
  resources 'signup', only: [:index, :create]

  get "welcome/index"  
  root to: "welcome#index"  

  get '/profile' => 'profile#index', as: 'profile'
  get '/profile/delete' => 'profile#delete', as: 'profile_delete'
  namespace :profile do
    resource :billing, only: [:show, :create]
    resource :name, only: [:update]
    resource :notification, only: [:show, :update]
  end

  namespace :admin do
    resources :users
    resources :articles
    resource :dashboard, only: [:show]
    root :to => "dashboards#show"
  end



end  
