class RecruitMailer < ApplicationMailer
  def recruit_email(params, params2)
    @params = Post.find(params.id)
    @params2 = params2
    if !@params.attachment.blank?
    then 
    attachments[@params.attachment.file.filename] = File.read(Rails.root.join(@params.attachment.file.path));
    end
    if  !params.attachment2.blank?
    then
    attachments[@params.attachment2.file.filename] = File.read(Rails.root.join(@params.attachment2.file.path));
    end
    if !@params.attachment3.blank?
    then
    attachments[@params.attachment3.file.filename] = File.read(Rails.root.join(@params.attachment3.file.path));
    end
    @params.destroy
    mail(to: ENV['username'], subject: 'Recruit 양식 제출자')
  end
end
