import { Text } from "./controls/text/Text"
import { Password } from "./controls/password/Password"
import { Email } from "./controls/email/Email"
import { Textarea } from "./controls/textarea/Textarea"
import { Date } from "./controls/date/Date"
import { File } from "./controls/file/File"

export const FormControl = props => {
    const { control, ...rest } = props

    switch (control) {
        case 'text':
            return <Text {...rest} />

        case 'email':
            return <Email {...rest} />

        case 'password':
            return <Password {...rest} />

        case 'textarea':
            return <Textarea {...rest} />

        case 'date':
            return <Date {...rest} />

        case 'file':
            return <File {...rest} />

        default:
            return null
    }
}