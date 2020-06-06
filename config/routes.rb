Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get '/frontend', to: 'pages#frontend'
  get '/backend', to: 'pages#backend'
  get '/hobbie', to: 'pages#hobbie'
  get '/social', to: 'pages#social'
  get '/project', to: 'pages#project'
  get '/profile', to: 'pages#profile'
  get '/experience', to: 'pages#experience'
  get '/language', to: 'pages#language'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
