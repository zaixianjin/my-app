import React, { useState } from 'react';
import axios from 'axios';

function AxiosApi() {
    
    // pets, setPets 비구조화 할당
    let [pets, setPets] = useState([]);

    // 통신 메서드
    function searchApi() {
        //const url = "http://localhost:8080/pets/search/findAllPetByUserId?id=1";
        const url = "/api";
        axios.get(url)  
        .then(function(response) {   
            setPets(response.data._embedded.pets);
            console.log("성공");
        })
        .catch(function(error) {
            console.log("실패");
        })
    }

    // 통신 메서드
    function registFormApi() {
      //const url = "http://localhost:8080/pets/search/findAllPetByUserId?id=1";
      const url = "/save";
      axios.get(url)  
      .then(function(response) {   
          setPets(response.data._embedded.pets);
          console.log("성공");
      })
      .catch(function(error) {
          console.log("실패");
      })
  }


    console.log("pets.length : " + pets.length )
    // 조회 데이터 존재할 경우
    if(pets.length > 0) {
        return (
          pets.map(pets => (

            <div>
                    <table border="0" width="400">
                    <tr>
                        <td rowspan="2"><img src="{pets.photo}"></img></td>
                        <td>이름 : {pets.name}</td>
                        <td>성별 : {pets.sex}</td>
                        <td>중성화 : {pets.neutralization}</td>
                    </tr>
                    <tr>
                        <td>견종 : {pets.petType}</td> 
                        <td>나이 : {pets.age}</td> 
                        <td>몸무게 : {pets.weight}</td>
                    </tr> 
                    </table>   
            </div>

            
                )
            )
        );
    } else { // 조회 데이터 존재하지 않을 경우
        return (
          <center>
            <div>
                <button onClick={searchApi}> Pet 불러오기 </button>


                &nbsp;&nbsp;

                <button onClick={registFormApi}> Pet 등록하기 </button>
            </div>
            </center>
        )
    }
}
export default AxiosApi;