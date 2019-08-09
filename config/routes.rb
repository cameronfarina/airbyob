Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

    namespace :api, defaults: { format: :json } do
      resources :listings do 
        resources :comments, only: [:create]
        resources :bookings, only: [:create]
      end
      resources :suggestions, only: [:index]
      resources :users, only: [:create]
      resources :comments, only: [:edit, :update, :destroy]
      resource :session, only: [:new, :create, :destroy]
      resources :bookings, only: [:index, :create, :destroy]
    end
end