import React from 'react';
// import axios from 'axios';

const login = () => {
    
  
}

const test = () => {
}


const Login = () => {          

    // const [users, setUsers] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //     try {
    //         // 요청이 시작 할 때에는 error 와 users 를 초기화하고
    //         setError(null);
    //         setUsers(null);
    //         // loading 상태를 true 로 바꿉니다.
    //         setLoading(true);
    //         const response = await axios.get(
    //             'http://localhost:3001/api/v1/login'
    //         );
    //         setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
    //     } catch (e) {
    //         setError(e);
    //     }
    //     setLoading(false);
    //     };

    //     fetchUsers();
    // }, []);

    // if (loading) return <div>로딩중..</div>;
    // if (error) return <div>에러가 발생했습니다</div>;
    // if (!users) return null;

    return (
        <div>           

    {/* <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
      ))}
    </ul> */}



            <button onClick={test}>test</button>
    <div class="container">
      <div class="regist-box">
        <h1 class="text-center">
          로그인
        </h1>
        <div class="mb-3">
          <label for="inputName" class="form-label">이름</label>
          <input type="text" class="form-control" id="inputName" />
          
          
        </div>
        <div class="mb-3">
          <label for="inputPw" class="form-label">비밀번호</label>
          <input type="password" class="form-control" id="inputPw" />
        </div>
        <div>
          <button onClick={login}  type="submit" class="btn btn-secondary w-100p mb-15">로그인</button>
        </div>
        <div>
          <button onclick="goRegist()" type="submit" class="btn btn-light w-100p">회원가입</button>
        </div>
      </div>
    </div>

            
        </div>
    )
}

export default Login;