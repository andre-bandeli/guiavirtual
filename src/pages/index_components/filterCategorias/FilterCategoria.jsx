import React from 'react'
import './filterCategoria.scss'
import { useEffect, useState } from 'react';
import CategoriaList from './CategoriaList';
import TitleContainer from '../../../components/titleContainer/TitleContainer'

import {violenciasexual, violenciafisica, violenciapsicologica, violenciainstitucional, violenciamoral,
     violenciadomestica, violenciapatrimonial, exploracaosexual, assediosexual, assediomoral, carcereprivado, traficodemulheres  } from './data'

export default function FilterCategoria() {


    const [selected, setSelected] = useState("violenciasexual");
    const [data, setData] = useState([]);
    const list = [
        {
        id: "violenciasexual",
        title: "Sexual",
        },
        {
        id: "violenciafisica",
        title: "Física",
        },
        {
        id: "violenciapsicologica",
        title: "Psicológica",
        },
        {
        id: "violenciainstitucional",
        title: "Institucional",
        },
        {
        id: "violenciamoral",
        title: "Moral",
        },
        {
        id: "violenciadomestica",
        title: "Doméstica",
        },
        {
        id: "violenciapatrimonial",
        title: "Patrimonial",
        },
        {
        id: "exploracaosexual",
        title: "Exploração Sexual",
        },
        {
        id: "assediosexual",
        title: "Assédio Sexual",
        },
        {
        id: "assediomoral",
        title: "Assédio Moral",
        },
        {
        id: "carcereprivado",
        title: "Cárcere Privado",
        },
        {
        id: "traficodemulheres",
        title: "Tráfico de Mulheres",
        },
        
    ];

    useEffect(() => {
        switch (selected) {
        case "violenciasexual":
            setData(violenciasexual);
            break;
        case "violenciafisica":
            setData(violenciafisica);
            break;
        case "violenciapsicologica":
            setData(violenciapsicologica);
            break;
        case "violenciainstitucional":
            setData(violenciainstitucional);
            break;
        case "violenciamoral":
            setData(violenciamoral);
            break;
        case "violenciadomestica":
            setData(violenciadomestica);
            break;
        case "violenciapatrimonial":
            setData(violenciapatrimonial);
            break;
        case "exploracaosexual":
            setData(exploracaosexual);
            break;
        case "assediosexual":
            setData(assediosexual);
            break;
        case "assediomoral":
            setData(assediomoral);
            break; 
        case "carcereprivado":
            setData(carcereprivado);
            break;
        case "traficodemulheres":
            setData(traficodemulheres);
            break;
        default:
            setData(violenciasexual);
        }
    }, [selected]);


  return (
    <div className='filterCategoria'>
            <TitleContainer 
            title="Tipos de Violência" 
            subtitle="A tipificação apresentada a seguir é proposta pela Política Nacional de Enfrentamento à Violência Contra as Mulheres" />

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
