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
    if @post.save
      if RecruitMailer.recruit_email(@post, post_params2).deliver
        respond_to do |format|
          format.js
        end
      else
        respond_to do |format|
          format.js {render 'recruitfail'}
        end
      end
    else
      respond_to do |format|
        format.js {render 'recruitfail'}
      end
    end
  end

  def contact
  end

  def contactsubmit
     ContactMailer.contact_email(params).deliver
  end

  private
    def post_params
      if !params[:post].blank? then params.require(:post).permit(:attachment, :attachment2, :attachment3) end
    end

    def post_params2
      params.permit(:name, :phonenumber, :email)
    end
end
