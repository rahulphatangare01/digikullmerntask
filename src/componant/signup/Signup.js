import React, { useState } from 'react'
import { Button,  Form, Input } from 'antd';

// import './Signup.css'
 import axios from 'axios'
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

function Signup() {
  const [form] = Form.useForm();
    const [data,setData] = useState({
      name:"",
        email:"",
        password:"",
    })
console.log(data)

    const handleChange =(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handle_Login =()=>{

    }
    const handle_Submit =()=>{
            axios.post('http://localhost:5051/api/data/signup',data).then((res)=>{
           setData(res.data)
            })
    }
  return (
    <div style={{ marginTop:"50px" }}> 
  
<h2 style={{textAlign:"center"}}>SignUp here</h2>

   <Form form={form} name="dynamic_rule">
      <Form.Item

        {...formItemLayout}
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please Enter your Name',
          },
        ]}
        onChange={handleChange}

      >
        <Input placeholder="Please Enter your "  name='name'   value={data.name} onChange={handleChange} />
      </Form.Item>



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
      <Link to="/login">
      <Button type="primary" onClick={handle_Submit}>
          Submit
        </Button>
      </Link>
        
        <Link to='/login'>
      <Button type="primary" onClick={handle_Login} style={{marginLeft:"10px"}}>
          login here
        </Button>
      </Link>
      </Form.Item>
    </Form>

    </div>
  )
}

export default Signup