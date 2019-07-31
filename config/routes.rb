Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

    namespace :api, defaults: { format: :json } do
      resources :listings
      resources :suggestions, only: [:index]
      resources :users 
      resource :session, only: [:create, :destroy]
    end
end