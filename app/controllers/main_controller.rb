class MainController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.js
    end 
  end 

  def aboutus
    respond_to do |format|
      format.html
      format.js
    end 
  end

  def works
    respond_to do |format|
      format.html
      format.js
    end 
  end

  def recruit
  end

  def contact
  end
  
end
