Rails.application.routes.draw do
  get 'testing/first'
  root 'testing#first'
  get 'testing/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
