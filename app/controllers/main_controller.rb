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
    @post = Post.new
  end
  def recruitsubmit 
    @post = Post.new(post_params)
    respond_to do |format|
      if @post.save
        if RecruitMailer.recruit_email(@post, post_params2).deliver
        then
          format.html { redirect_to '/recruit', notice: 'Post was successfully created.' }
          format.json { render :show, status: :created, location: @post }
        else
          format.html { redirect_to '/recruit' }
        end
      else
        format.html { redirect_to '/recruit' }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end
  def contact
  end
  def contactsubmit
    if ContactMailer.contact_email(params).deliver
      respond_to do |format|
      format.html { redirect_to '/contact', notice: 'Post was successfully created.' }
      end
    else
      respond_to do |format|
        format.html { redirect_to '/contact' }
       end
    end
  end
  private
    # Use callbacks to share common setup or constraints between actions.
   

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      if !params[:post].blank? then params.require(:post).permit(:attachment, :attachment2, :attachment3) end
    end
    def post_params2
      params.permit(:name, :phonenumber, :email)
    end
end
