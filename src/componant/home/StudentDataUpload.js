import React, { useState } from 'react'
import { Button,  Form, Input } from 'antd';
import "antd/dist/antd.css"
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

function StudentDataUpload() {

  const [form] = Form.useForm();
  const [data,setData] = useState({
    name:"", age:"",class:"",
  })

const handleChange = (e) => {
  setData({ ...data, [e.target.name]: e.target.value });
};
const handle_Submit =()=>{
        axios.post('http://localhost:5051/api/data/studentdata',data).then((res)=>{
       setData(res.data)
        })
}
  
  return (
    <div style={{ marginTop:"50px" }}>
<h2 style={{textAlign:"center"}}>StudentData</h2>


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
        name="age"
        label="Age"
        rules={[
          {
            required: true,
            message: 'Please Enter your age',
          },
        ]}
        onChange={handleChange}

      >
        <Input placeholder="Please Enter your age"  name='age' value={data.age} onChange={handleChange} />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        name="class"
        label="Class"
        rules={[
          {
            required: true,
            message: 'Please Enter your class',
          },
        ]}
        onChange={handleChange}
      >
        <Input placeholder="Please Enter your class" name='class' value={data.class} onChange={handleChange} />
      </Form.Item>
      <Form.Item {...formTailLayout}>
      <Link to="/home1">
      <Button type="primary" onClick={handle_Submit}>
          Submit
        </Button>
      </Link>
        
      </Form.Item>
    </Form>

    </div>
  )
}

export default StudentDataUpload