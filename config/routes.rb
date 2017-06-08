Rails.application.routes.draw do
  devise_for :users
  root 'boards#new'
  resources :boards, only: :create do
    resources :lists, only: :new
  end
end
