Rails.application.routes.draw do
  devise_for :users
  root 'boards#new'
end
