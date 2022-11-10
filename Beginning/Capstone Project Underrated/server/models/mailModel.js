class Mail {
    constructor({
        to,
        text
    }) {
        this.from = 'mohammedrambo326@gmail.com'
        this.to = to
        this.subject = 'Reset Password'
        this.text = text
    }
}

export default Mail