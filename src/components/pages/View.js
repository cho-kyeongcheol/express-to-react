import React, { Component } from 'react';
import  { post } from 'axios';
import axios from 'axios';


class View extends Component{
    constructor(props) {
        super(props);
        this.state = {
        file: null,
        userName: '',
        birthday: '',
        gender: '',
        job: '',
        fileName: ''
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleFileChange = this.handleFileChange.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
        this.addCustomer = this.addCustomer.bind(this)
        }
        
        handleFormSubmit(e) {
        e.preventDefault()
        this.addCustomer()
        .then((response) => {
        console.log(response.data);
        })
        }
        
        handleFileChange(e) {
        this.setState({
        file: e.target.files[0],
        fileName: e.target.value
        });
        }
        
        handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
        }
        
        addCustomer(){
        const url = 'http://localhost:3001/api/v1/regist';
        const formData = new FormData();
        formData.append('image', this.state.file)
        formData.append('name', this.state.userName)
        formData.append('birthday', this.state.birthday)
        formData.append('gender', this.state.gender)
        formData.append('job', this.state.job)
        const config = {
        headers: {
        'content-type': 'multipart/form-data'
        }
        }
        
        return post(url, formData, config)
        }
        
        
        
   render() {
    return (
        <div>
        <h1>View</h1>
        <h1>View</h1>

        <form onSubmit={this.handleFormSubmit}>


프로필 이미지: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br/>

이름: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br/>

생년월일: <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br/>

성별: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br/>

직업: <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br/>

<button type="submit">추가하기</button>

</form>


        
        </div>
    )
}
}


export default View;