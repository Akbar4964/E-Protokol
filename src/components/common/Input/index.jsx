import { Form, Input } from 'antd'
import React from 'react'

function Input({name,rules}) {
    return (
        <Form.Item
            name={name}
            rules={rules}
        >
            <Input className="user-input" placeholder="Kiriting" />
        </Form.Item>
    )
}

export default Input
