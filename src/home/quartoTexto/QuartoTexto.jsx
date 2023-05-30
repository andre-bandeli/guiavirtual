import React from 'react'
import '../primeiroTexto/primeiroTexto.scss'
import imagem_3 from '../../assets/img3.png'
import TitleContainer from '../titleContainer/TitleContainer'


export default function QuartoTexto() {
  return (
    <div className='segundoTexto'>
      <TitleContainer title="Não se Cale!"
      subtitle="A violência contra a mulher (assim como outras violências e algumas doenças) são de notificação compulsória. O que isso significa?
      "/>
        <div className="container">
          <div className="col-12">
            <p>
              <h3>
                Que, como profissionais, não podemos nos calar diante de situações de suspeita ou confirmação de violência e precisamos avisar os outros serviços. A <strong>
                Portaria nº. 2.406/04/GM </strong> do Ministério da Saúde institui serviço de notificação compulsória de violência contra a mulher, e traz um modelo de ficha de 
                notificação para preencher com algumas informações como telefone, endereço, nome, tipo de violência percebido, mesmo que não tenhamos todas as informações. 
                Com esse documento, alimentamos um sistema de informação em que toda a rede de serviços
                pode se movimentar para atender essas violências, tentar minimizar danos, tentar interromper as violências cíclicas.
              </h3>
            </p>   

            <p>
              <h3> 
              Falando nisso… você sabia que a <strong>Prefeitura Municipal da Estância Turística de Ilha Solteira - SP </strong> possui sua própria ficha de notificação de 
              violência contra a mulher? Pois é, houve todo um trabalho e encontros de profissionais de diferentes setores para estruturar o fluxo de atendimento a 
              mulheres que sofreram violência e disso saiu a ficha de notificação.
              </h3>
            </p>
    
          </div>
            <div className="col-12">
            <iframe src="https://www.youtube.com/embed/2hyT0VCDasY" title="YouTube video player" async
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <h4><strong>Em resumo:</strong> temos um Protocolo de Fluxo de Atendimento a Mulheres Vítimas de Violência que diz que cada componente da rede de serviços do município tem responsabilidade no atendimento adequado a mulheres que sofreram violência. 
                Ou seja, não é só CREAS e Delegacia de Polícia que lidam com essa questão, pois ela pode surgir em diversos lugares.</h4>
            </div>
        </div>
    </div>
  )
}
