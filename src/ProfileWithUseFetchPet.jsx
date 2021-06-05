// ProfileWithUseFetchUser.jsx

import React from "react";
import useFetchUser from "./useFetchPet";

function Profile({ userId }) {
  const { loading, pets, error } = useFetchPet(userId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
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
  );
}