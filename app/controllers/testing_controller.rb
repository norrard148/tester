class TestingController < ApplicationController
  def first
  end

  def first1
    respond_to do |format|               
      format.js
    end        
  end 
end
