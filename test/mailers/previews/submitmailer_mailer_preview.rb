# Preview all emails at http://localhost:3000/rails/mailers/submitmailer_mailer
class SubmitmailerMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/submitmailer_mailer/submit
  def submit
    SubmitmailerMailer.submit
  end

end
