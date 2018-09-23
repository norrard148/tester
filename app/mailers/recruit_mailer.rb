class RecruitMailer < ApplicationMailer
  def recruit_email(params)
    @mail = "norrard148@gmail.com"
    @params = Post.find(params.id)
    attachments[@params.attachment.file.filename] = File.read(Rails.root.join(@params.attachment.file.path));
    attachments[@params.attachment2.file.filename] = File.read(Rails.root.join(@params.attachment2.file.path));
    attachments[@params.attachment3.file.filename] = File.read(Rails.root.join(@params.attachment3.file.path));
    mail(to: 'jihyuunn710@gmail.com', subject: 'You made it!')
    @params.destroy
  end
end
