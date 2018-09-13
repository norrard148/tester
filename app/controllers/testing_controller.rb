class TestingController < ApplicationController
  def first
  end
  def second
  end
  def third
  end
  def first1
    respond_to do |format|               
      format.js
    end        
  end 

  private
  def t_params
    params.require(:first).permit(:target)
  end
end
