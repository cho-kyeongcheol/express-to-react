
# 1/26

  

#### input 값 받아오기
```
const inputName = document.getElementById("inputName").value
```
  
  ### input에 text삽입 후 출력
  ```  javascript
class Regist extends Component {
state = {
name: ''
}
handleChange = (e) => {
this.setState({
name: e.target.value
})
}
render() {
return (
<div>
<form>
<input
placeholder="이름"
value={this.state.name}
onChange={this.handleChange}
/>
<div>{this.state.name}</div>
</form>
```

  

## CORS 에러
(expressjs) /server.js
```
const cors = require("cors");
app.use(cors());
```
### 다른 포트번호 ajax 통신
``` js
const  URL = 'http://localhost:3001/api/v1/regist'
	axios.post(URL, {
		inputName:  inputName,
		inputPw:  inputPw
	})
	.then( response  => { console.log(response) } )
	.catch( response  => { console.log(response) } );

```