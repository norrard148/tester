Rails.application.routes.draw do
  get 'testing/first'
  get 'testing/index'
  get 'testing/second'
  get 'testing/third'
  get 'testing/first1'
  get 'testing/aboutus'
  get 'testing/works'
  root 'testing#first'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
