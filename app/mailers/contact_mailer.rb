class ContactMailer < ApplicationMailer
    def contact_email(params)
        @params = params
        mail(to: ENV['username'], subject: 'Contact 양식 제출자')
    end
end
