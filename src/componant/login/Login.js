import React, { useState } from 'react'
// import './Login.css'
import { Button,  Form, Input } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

const formItemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const formTailLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
    offset: 10,
  },
};
function Login() {
  const [form] = Form.useForm();
  const [data,setData] = useState({
      email:"",
      password:"",
  })
console.log(data)

  const handleChange =(e)=>{
      setData({...data,[e.target.name]:e.target.value})
  }
  const handle_Submit =()=>{
          axios.post('http://localhost:5051/api/data/login',data).then((res)=>{
         setData(res.data)
        })
      } 
  return (
    <div style={{ marginTop:"50px" }}>
         <h2 style={{textAlign:"center"}} >Login here</h2>
         <Form form={form} name="dynamic_rule">
         <Form.Item
        {...formItemLayout}
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            message: 'Please Enter your Email',
          },
        ]}
        onChange={handleChange}

      >
        <Input placeholder="Please Enter your Email"  name='email' value={data.email} onChange={handleChange} />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please Enter your password',
          },
        ]}
        onChange={handleChange}
      >
        <Input placeholder="Please Enter your Password" name='password' value={data.password} onChange={handleChange} />
      </Form.Item>
      <Form.Item {...formTailLayout}>
      <Link to="/home">
      <Button type="primary" onClick={handle_Submit}>
          Submit
        </Button>
      </Link>
       
      </Form.Item>
    </Form>
    </div>
  )
}
  

export default Login