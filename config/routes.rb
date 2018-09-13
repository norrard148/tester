Rails.application.routes.draw do
  resources :posts
  get 'testing/first'
<<<<<<< HEAD
  get 'testing/firsttest'
=======
  get 'testing/index'
>>>>>>> c29e4b51f32109261548ad2ef55fa630f866d904
  get 'testing/second'
  get 'testing/second1' 
  get 'testing/second2'  
  get 'testing/third'
<<<<<<< HEAD
=======
  get 'testing/first1'
  get 'testing/aboutus'
>>>>>>> c29e4b51f32109261548ad2ef55fa630f866d904
  root 'testing#first'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
