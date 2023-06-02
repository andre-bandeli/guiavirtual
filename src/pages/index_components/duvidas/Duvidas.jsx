import React from 'react'
import './duvidas.scss'
import './responsive.css'
import TitleContainer from '../../../components/titleContainer/TitleContainer'
import { Link } from "react-router-dom";



import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Duvidas() {
  return (
    <div className='duvidas'>
         <TitleContainer 
            title="Principais Dúvidas" 
            subtitle="Confira aqui algumas das principais dúvidas que podem surgir durante a leitura do guia." />
        <div className="container-duvidas">
        
        <Accordion className='acordion'>

                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                            O que é saúde coletiva?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                        A Saúde Coletiva é uma área do conhecimento que tem como objetivo compreender e atuar nas
                                         questões relacionadas à saúde da população de forma ampla e integrada. Ela se baseia na ideia 
                                         de que a saúde é um direito de todos e deve ser garantido de forma equânime, independentemente da 
                                         raça, gênero, classe social ou outras características. A Saúde Coletiva abrange desde a prevenção de 
                                         doenças até a atenção às necessidades de saúde da população, passando pela promoção da saúde, proteção 
                                         social e atenção às desigualdades sociais. Ela busca trabalhar com a população e os profissionais de saúde 
                                         de forma colaborativa para garantir que as políticas e ações de saúde sejam eficazes, eficientes e 
                                        justas para todos. Em resumo, a Saúde Coletiva é uma abordagem multidisciplinar e participativa 
                                        para garantir a saúde de toda a população.
                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                            Qual a importância deste guia?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                        Este guia é destinado a servir como um instrumento de apoio à formação 
                                        continuada dos profissionais, proporcionando-lhes reflexões importantes sobre o 
                                        tema da violência de gênero e acesso a materiais bibliográficos e narrativas produzidas durante a pesquisa de campo.
                                         Além disso, ele combina as dimensões técnica e afetiva em um material de fácil acesso e utiliza a tecnologia para veicular esse conhecimento de forma efetiva.
                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>     
                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                           Onde posso acessar a pesquisa completa?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                       A pesquisa completa pode ser acessada <Link to='https://drive.google.com/file/d/191Bag34rct0145eot2atPMyiq7J5TMXk/view?usp=sharing' target='_blank'>clicando aqui</Link> ou você pode acessar nossa página 'Sobre a pesquisa' para saber mais.
                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>     
                              
                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                            A quem esse guia se destina?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                        Em resumo, este guia é destinado a todos os profissionais que 
                                        trabalham com o atendimento às situações de violência de gênero, e que buscam aprimorar sua formação e conhecimento sobre o tema.
                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>               
                          
                    </Accordion>
        </div>
    </div>
  )
}
