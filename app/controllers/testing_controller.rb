class TestingController < ApplicationController
  def first
  end
<<<<<<< HEAD
  def firsttest
    respond_to do |format|               
    format.js
    end   
  end
=======

>>>>>>> c29e4b51f32109261548ad2ef55fa630f866d904
  def second
    if params[:brandname] == nil then redirect_to "/" end
  end
  def second1
    respond_to do |format|               
      format.js
    end 
  end
  def second2
    @b = params[:b]
    respond_to do |format|               
      format.js
    end 
  end

  def third
    if params[:customer] == nil then redirect_to "/" end
  end
  
  def first1
    respond_to do |format|               
      format.js
    end        
  end 

<<<<<<< HEAD
=======
  def index
  end 

  def aboutus
  end

  private
  def t_params
    params.require(:first).permit(:target)
  end
>>>>>>> c29e4b51f32109261548ad2ef55fa630f866d904
end
