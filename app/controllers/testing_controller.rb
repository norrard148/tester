class TestingController < ApplicationController
  def first 
  end

  def firsttest
    respond_to do |format|
      format.js
    end  
  end

  def second
    $params = params
    @permitted_params = params.require(:customer).permit(:brandname, :name, :phonenumber, :email, :media, :testtype, :url)
    if @permitted_params[:brandname].empty? || @permitted_params[:name].empty? || @permitted_params[:phonenumber].empty? || @permitted_params[:email].empty? || @permitted_params[:media].empty? || @permitted_params[:testtype].empty? || @permitted_params[:url].empty? 
      then
      redirect_to "/testing/first"
    else
    end
    
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
    @purpose_count = params[:purpose_count]
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
    @params = params
  end

  def submit
    params.permit! 
    @params = params
    TestingMailer.testing_email(@params).deliver
  end

  private
  def t_params
    params.require(:first).permit(:target)
  end
end
