import { useState } from 'react';

export default function chapters() {
    const [ data, setData ] = useState([
    {
        id: 1,
        name: "Bem-vindo",
        description: "Uma introdução da documentação.",
    },
    {
        id: 1,
        name: "Apredendo HTML e CSS",
        description: "HTML e CSS são duas importantes tecnologias para desenvolvimento web.",
    }
   ])
    return (
        <ul>
        {
            data.map((u, k) => {
               return (
                    <li key={k}><a href="#">{u.name}</a></li>
               )
            })
        }
        </ul>
    )
}