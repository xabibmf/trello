Rails.application.routes.draw do
  devise_for :users
  root 'boards#new'
  resources :boards, only: [:create, :update, :destroy] do
    resources :lists, only: [:new, :create, :update, :destroy] do
      put :sort
      resources :cards, only: [:create, :update] do
        put :sort
        resources :activities, only: [:create, :update, :destroy]
      end
    end
  end
end
