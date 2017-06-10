Rails.application.routes.draw do
  devise_for :users
  root 'boards#new'
  resources :boards, only: [:create, :update] do
    resources :lists, only: [:new, :create, :update] do
      resources :cards, only: [:create, :update] do
        resources :activities, only: :create
      end
    end
  end
end
