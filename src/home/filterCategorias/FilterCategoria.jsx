import React from 'react'
import './filterCategoria.scss'
import { useEffect, useState } from 'react';
import CategoriaList from './CategoriaList';
import TitleContainer from '../titleContainer/TitleContainer'

import {tipo, tipo2} from './data'

export default function FilterCategoria() {


    const [selected, setSelected] = useState("tipo");
    const [data, setData] = useState([]);
    const list = [
        {
        id: "tipo",
        title: "Tipos 1",
        },
        {
        id: "tipo2",
        title: "Tipo 2",
        },
        {
        id: "honda",
        title: "Honda",
        },
        {
        id: "bmw",
        title: "BMW Motorrad",
        },
        {
        id: "motos",
        title: "Motocicletas",
        },
        {
        id: "yamaha",
        title: "Yamaha",
        },
        {
        id: "honda",
        title: "Honda",
        },
        {
        id: "bmw",
        title: "BMW Motorrad",
        },
        {
        id: "motos",
        title: "Motocicletas",
        },
        {
        id: "yamaha",
        title: "Yamaha",
        },
        {
        id: "honda",
        title: "Honda",
        },
        {
        id: "bmw",
        title: "BMW Motorrad",
        },
        
    ];

    useEffect(() => {
        switch (selected) {
        case "tipo":
            setData(tipo);
            break;
        case "tipo2":
            setData(tipo2);
            break;
        default:
            setData(tipo);
        }
    }, [selected]);


  return (
    <div className='filterCategoria'>
            <TitleContainer 
            title="Título da pesquisa" 
            subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />

        <div className='filter'>
                <ul>
                    {list.map((item) => (
                    <CategoriaList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                    ))}
                </ul>    
        </div>

        <div className='text-descricao'>
            {data.map(e=>(

                <div className="box">
                        <h2>{e.titulo}</h2>
                        <h3>{e.segundoTexto}</h3>
                </div>
            ))}
        </div>

    </div>
  )
}
