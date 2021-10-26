const Attachment = use('App/Models/Attachment')

class AttachmentRepository {
    async store(request) {
        return await Attachment.create(request)
    }

    async show(params) {
        return await Attachment.findOrFail(params.id)
    }
}

module.exports = new AttachmentRepository