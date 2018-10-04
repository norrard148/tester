class TestingMailer < ApplicationMailer

  def testing_email(params)
    @params = params
    mail(to: ENV['username'], subject: 'testing 양식 제출자')
  end
end
