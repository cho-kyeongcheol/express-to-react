import React from 'react';


const Home = () => {

    const test = () => {
        alert('!!!')
        console.log('teststeset')

    }

    return (
        <div>
        <div className="container w100">
     <button onclick={test}>test</button>
        <div className="title">
          현재 상태
        </div>
        <div>
          로그인
        </div>
        <div className="title">
          사용자명
        </div>
        <div id="username">
         
        </div>
        <button onclick="logout()" type="button" className="loginBtn btn btn-secondary mt-20">로그아웃</button>
        
  
      <div className="title">
        현재 상태
      </div>
      <div>
        비로그인
      </div>
      <button onclick="login()" type="button" className="loginBtn btn btn-secondary mt-20">로그인</button>


    <div className="row mt-20">
      <div className="col">
        <input id="inputText" type='text' className='form-control' placeholder="입력하세요" /> 
      </div>
      <div className="col">
        <button className="btn btn-secondary" onclick="insertTodo()">등록</button>
      </div>
    </div>    

  </div>



  <input className='form-control input ml-10 mt-10 mb-15' type="text" id="searchTodo" placeholder="검색어를 입력하세요" /> 
  <button className="btn btn-primary ml-10">검색</button>

    <div className="todo_list mt-20">
      게시판 출력
    </div>


    <table id="todo_list" >
    </table> 


 <ul className="pagination" >
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        
        <li className="page-item"><a className="page-link" href="board/read/page/"></a></li>
            
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>





        </div>
    )
}


export default Home;