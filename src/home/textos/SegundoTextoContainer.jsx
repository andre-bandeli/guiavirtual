import React from 'react'
import './textoContainer.scss'
import TitleContainer from '../titleContainer/TitleContainer'


export default function SegundoTextoContainer() {
  return (
    <div className='textosContainerHeader'>
       <TitleContainer 
            title="Não se Cale!" 
            subtitle="A violência contra a mulher (assim como outras violências e algumas doenças) são de notificação compulsória. O que isso significa?" />

      <div className="containerText">
        <div className="title-text">
            <h2> 
              <p>
              A violência contra a mulher (assim como outras violências e algumas doenças) são de notificação compulsória.
                  O que isso significa? Que, como profissionais, não podemos nos calar diante de situações de suspeita ou 
                  confirmação de violência e precisamos avisar os outros serviços. A Portaria nº. 2.406/04/GM do Ministério da
                  Saúde institui serviço de notificação compulsória de violência contra a mulher, e traz um modelo de ficha de 
                  notificação para preencher com algumas informações como telefone, endereço, nome, tipo de violência percebido, 
                  mesmo que não tenhamos todas as informações. Com esse documento, alimentamos um sistema de informação em que toda a
                  rede de serviços pode se movimentar para atender essas violências, 
                  tentar minimizar danos, tentar interromper as violências cíclicas.
              </p>

                <p>
                    Falando nisso… você sabia que a Prefeitura Municipal da Estância Turística de Ilha Solteira/SP possui sua própria 
                    ficha de notificação de violência contra a mulher? Pois é, houve todo um trabalho e encontros de profissionais de 
                    diferentes setores para estruturar o fluxo de atendimento a mulheres que sofreram violência e disso saiu a ficha de 
                    notificação.
                </p>
                <p>
                    Em resumo: temos um Protocolo de Fluxo de Atendimento a Mulheres Vítimas de 
                    Violência que diz que cada componente da rede de serviços do município tem responsabilidade no atendimento adequado a
                    mulheres que sofreram violência. Ou seja, não é só CREAS e Delegacia de Polícia que lidam com essa questão,
                    pois ela pode surgir em diversos lugares. Vamos assistir a esse vídeo que mostra como os serviços se relacionam:
                </p>
          </h2>
        </div>
      </div>


    </div>
  )
}
