class SubmitmailerMailer < ApplicationMailer

  def submit(params)
    @params = params
    mail(to: "", subject: 'Welcome to My Awesome Site')
  end
end
