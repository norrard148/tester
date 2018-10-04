Rails.application.routes.draw do
  root 'main#index'
  get '/aboutus' => "main#aboutus"
  get '/works' => "main#works"
  get '/contact' => "main#contact"
  post '/contactsubmit' => "main#contactsubmit"
  get '/recruit' => "main#recruit"
  post '/recruitsubmit' => "main#recruitsubmit"
  get 'testing/first'
  get 'testing/firsttest'
  get 'testing/second'
  get 'testing/second1' 
  get 'testing/second2' 
  get 'testing/second3'
  get 'testing/secondtest'  
  get 'testing/third'
  get 'testing/submit'
  post 'testing/submit'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
