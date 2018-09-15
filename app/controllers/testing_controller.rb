class TestingController < ApplicationController
  def first
  end
  def firsttest
    respond_to do |format|               
    format.js
    end   
  end
  def second
    if params[:brandname] == nil then redirect_to "/" end
  end
  def second1
    @purpose_count = params[:purpose_count]
    respond_to do |format|               
      format.js
    end 
  end
  def second2
    @target_count = params[:target_count]
    @purpose_number = params[:purpose_number]
    respond_to do |format|               
      format.js
    end 
  end
  def second3
    @purpose_count = params[:purpose_count]
    respond_to do |format|               
      format.js
    end 
  end
  def secondtest
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

  def index
  end 

  def aboutus
  end

  def works
  end

  def recruit
  end

  def contact
  end
  
  private
  def t_params
    params.require(:first).permit(:target)
  end
end
