Rails.application.routes.draw do
  resources :posts
  get 'testing/first'
  get 'testing/firsttest'
  get 'testing/index'
  get 'testing/second'
  get 'testing/second1' 
  get 'testing/second2'  
  get 'testing/third'
  get 'testing/first1'
  get 'testing/aboutus'
  root 'testing#first'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
