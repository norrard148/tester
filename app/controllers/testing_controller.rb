class TestingController < ApplicationController
  def first
    respond_to do |format|
      format.html
      format.js
    end  
  end
  def firsttest
    respond_to do |format|
      format.js
    end  
  end
  def second
   
    @permitted_params = params.permit(:brandname, :name, :phonenumber, :email, :media, :testtype, :url)
    if @permitted_params[:brandname].empty? || @permitted_params[:name].empty? || @permitted_params[:phonenumber].empty? || @permitted_params[:email].empty? || @permitted_params[:media].empty? || @permitted_params[:testtype].empty? || @permitted_params[:url].empty? 
      then
      redirect_to "/"
    else
      respond_to do |format|
        format.html
        format.js
      end 
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
    params.permit! 
    @params = params
    @permitted_params = params.require(:customer).permit(:brandname, :name, :phonenumber, :email, :media, :testtype, :url)
    @permitted_params2 = params.require(:purpose)
    @dl = [:brandname, :name, :phonenumber, :email, :media, :testtype, :url]
    @c = false
    @dl.each do |a|
      if @permitted_params.has_key?(a)
      then 
        if @permitted_params[a].empty? 
        then
          @c = true
        else
        end
      else
        @c = true
      end
    end
    if @permitted_params2.empty?
      @c = true
    else
    end
    if @c== true 
    then
      redirect_to "/"
    end
  end
  def submit
    params.permit! 
    @params = params
    SubmitmailerMailer.submit(@params).deliver
  end

  private
  def t_params
    params.require(:first).permit(:target)
  end
end
