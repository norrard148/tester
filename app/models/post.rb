class Post < ApplicationRecord
    mount_uploader :attachment, AttachmentUploader
    mount_uploader :attachment2, Attachment2Uploader
    mount_uploader :attachment3, AttachmentUploader
end
