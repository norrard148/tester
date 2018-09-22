class SubmitmailerMailer < ApplicationMailer

  def submit(params)
    @params = params
    mail(to: ENV['username'], subject: 'testing 양식 제출자')
  end
end
