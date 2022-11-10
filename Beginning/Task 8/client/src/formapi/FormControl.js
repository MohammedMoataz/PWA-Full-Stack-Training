import { Text } from "./controls/text/Text"
import { Password } from "./controls/password/Password"
import { Textarea } from "./controls/textarea/Textarea"
import { Date } from "./controls/date/Date"
import { Email } from "./controls/email/Email"

export const FormControl = (props) => {
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

        default:
            return null
    }
}