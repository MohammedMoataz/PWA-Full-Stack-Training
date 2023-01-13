import { Messages } from "./messages/Messages"
import { Options } from "./options/Options"
import { Form } from "./form/Form"

import "./frame.css"

export const Frame = () => <div className="frame">
    <Messages />
    <Options />
    <Form />
</div>