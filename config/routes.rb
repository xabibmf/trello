Rails.application.routes.draw do
  devise_for :users
  root 'boards#new'
  resources :boards, only: :create
end
