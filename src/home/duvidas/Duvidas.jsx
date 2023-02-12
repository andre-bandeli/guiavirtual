import React from 'react'
import './duvidas.scss'
import TitleContainer from '../titleContainer/TitleContainer'

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
            subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
        <div className="container-duvidas">
        
        <Accordion className='acordion'>
                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h' >
                                            Como este guia é estruturado?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                        Para saber se você é elegível para um financiamento, basta entrar em contato com a
                                         instituição financeira e informar seus dados. Eles farão uma avaliação e informarão se você atende aos requisitos.
                                        </h3>

                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                            O que é saúde coletiva?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                            O prazo máximo para pagamento de um financiamento varia de 
                                            acordo com a instituição financeira e o valor financiado. Em média, pode ser de até 60 meses.
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
                                        Sim, os financiamentos geralmente possuem juros aplicados, que podem 
                                        ser fixos ou variáveis. É importante comparar as taxas de juros antes de escolher uma instituição financeira.
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
                                        Sim, a forma de pagamento é uma escolha do solicitante do 
                                        financiamento. É possível optar por pagamentos mensais, semanais
                                         ou até quinzenais, dependendo da instituição financeira.
                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>     
                                <AccordionItem className='ac'>
                                    <AccordionItemHeading className='head'>
                                        <AccordionItemButton className='h'>
                                        Como posso entrar em contato?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <h3>
                                        O valor mínimo que você pode financiar varia de acordo 
                                        com a instituição financeira. Em geral, é possível financiar valores a partir de R$ 1.000,00.
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
                                        Depende da instituição financeira. Algumas exigem garantias, como imóveis ou veículos, 
                                        enquanto outras podem oferecer financiamentos sem garantias, mas com juros mais elevados. É
                                         importante informar-se antes de solicitar o financiamento.

                                        </h3>
                                    </AccordionItemPanel>
                                </AccordionItem>               
                          
                    </Accordion>
        </div>
    </div>
  )
}
