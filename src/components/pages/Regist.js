import React, { Component } from 'react';
import axios from 'axios';



const Regist = () => {

    const goLogin = () => {
        alert("goLogin");
     }

    //  function handleSuccess(data) { console.log(data); }
    // function handleFailure(data) { console.log('error', data); }

     const regist = () => {

        // const API = axios.create({
        //     baseURL: '/api',
        //     headers: {
        //       Authorization: localStorage.getItem('auth_token'),
        //     },
        //   });

        // const inputId = document.getElementById("inputId").value
        // const inputPw = document.getElementById("inputPw").value

        // const createIssue = async (inputId, inputPw) => {
        //     const response = await API.post(`/http://localhost:4000/api/v1/regist`, {
        //       inputId,
        //       inputPw
        //     });
        //     return response;
        //   };
       
       
        const inputId = document.getElementById("inputId").value
        const inputPw = document.getElementById("inputPw").value
        console.log('inputname =>' , inputId)
        console.log('inputpw => ' , inputPw)
        axios.post('http://localhost:4000/api/v1/regist', {
            inputId: inputId,
            inputPw: inputPw
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });



       
        //  const URL = 'http://localhost:3001/api/v1/regist'
        // axios.post(URL, {
        //     inputName: inputName,
        //     inputPw: inputPw
        //   })
        //   .then(handleSuccess)
        //  .catch(handleFailure);


    //     axios({
    //         method: 'post',
    //         url: 'http://localhost:3001/api/v1/regist', 
    //         data: {
    //         inputName: inputName,
    //         inputPw: inputPw
    //     }    
    //     .then(function (response) {
    //         console.log(response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       })
    // });


    }

    


        return (
            <div>
                
                <div className="container">
                    <div className="regist-box">
                        <h1 className="text-center">회원가입 </h1>
                        
                        
                        
                        <div className="mb-3">
                            <label htmlFor="inputId" className="htmlForm-label">이름</label>
                            <input type="text" className="htmlForm-control" id="inputId" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPw" className="htmlForm-label">비밀번호</label>
                            <input type="password" className="htmlForm-control" id="inputPw" />
                        </div>

                        <div>
                            <button onClick={regist} type="submit" className="btn btn-secondary w-100p mb-15">회원가입</button>
                        </div>
                        <div>
                            <button onClick={goLogin} type="submit" className="btn btn-light w-100p">로그인 페이지 이동</button>
                        </div>


                    </div>
                </div>
            </div>


        )    

}

export default Regist;