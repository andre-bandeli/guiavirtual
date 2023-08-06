import React from 'react'
import { Link } from "react-router-dom";
import Frame from '../pages/index_components/frame/Frame';
import './style.scss'


import Navbar from '../components/Navbar/Navbar';
import FilterCategoria from './index_components/filterCategorias/FilterCategoria';
import Duvidas from './index_components/duvidas/Duvidas'
import Footer from '../components/Footer/Footer'
import Share from './index_components/textos/Share';

export default function Index() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>

        {/* ---------------- HERO SECTION ----------------  */}
        <section className='hero'>
          <div className='heroContainer'>
            <div className="container-lg-12">
              <div className="container">
                <h1>Guia virtual de atendimento à mulheres vítimas de violência</h1>
                  <h2>Um guia virtual para atendimento de mulheres vítimas de violência como produto do Mestrado em Saúde Coletiva
                    pela Faculdade de Ciências Médicas da Unicamp</h2>
                    <button className='primary-button'>
                      <Link to="/">ler mais</Link>
                    </button>
              </div>
            </div>
          </div>
        </section>
        {/* ---------------- END HERO SECTION ----------------  */}


        <section className='text'>
              <div className="container">
                <h2>Política, Planejamento e Gestão</h2>
                  <p>
                  Este guia virtual é um produto técnico produzido no mestrado profissional em Saúde Coletiva da UNICAMP, numa pesquisa orientada pela Profa Dra Rosana Teresa Onocko-Campos e compõe uma pesquisa bem maior chamada Implementação de Ambulatório a Pessoas Expostas a Situações de Violência, com vários mestrandos, doutorandos, residentes. Pensando especialmente para os trabalhadores do município de Ilha Soleira/SP, espero que este produto técnico possibilite reflexões através do texto e dos links de acesso a materiais sobre o tema.</p>
                      <p>Este guia reúne material bibliográfico e narrativas produzidas durante a pesquisa de campo. Não é um resumo da dissertação – essa pode ser acessada clicando aqui – mas uma elaboração do conhecimento produzido na investigação. É destinado a profissionais que trabalham em serviços públicos como um instrumento de apoio à formação continuada sobre atendimento a situações de violência de gênero. As narrativas produzidas na pesquisa trouxeram duas dimensões importantes: técnica e afetiva. Por isso, a maior colaboração que consigo pensar em trazer é juntar essas duas dimensões – técnica e afetiva – em um material de fácil veiculação, utilizando a parte mais libertadora e ramificada da tecnologia, tecnologia essa que na pandemia de Covid-19 trouxe significados e afetações diversos.
                    </p>

          </div>
        </section>
        <section>
          <div className="container-black">
            <Frame
                tag = "CENA 1"
                title="Elas Derramam"
                subtitle="Um vídeo criado por Márcia Rodrigues Rocha, mulher feminista e fonoaudióloga sanitarista, Inayá Ananias Weijenborg e editado por Rafael Marques da Silva - Coordenadoria de Apoio Acadêmico-CAAC/FCM/UNICAMP"
                videoSrc="https://www.youtube.com/embed/XXR1YpgZi4Y"
            />
          </div>
        </section>
        {/* <SegundoTexto/> */}
        <section className='text'>
              <div className="container">
                <h2>Introdução</h2>
                  <p>
                  Todos temos impulsos agressivos em alguma medida, mas direcionar esses impulsos na forma de violência é outra história. A manifestação da agressividade da forma de VIOLÊNCIA significa utilizar PODER, força física, influências e privilégios para DOMINAR alguém ou um grupo de pessoas e essa dominação provoca danos significativos: diminui a qualidade de vida de pessoas e famílias, provoca morte, doenças, lesões, problemas emocionais, psicológicos, espirituais, enfim… é um problema que precisa ser tratado intersetorialmente, multidisciplinarmente.</p>
                      <p>A violência é social e histórica: em diferentes sociedades e em diferentes tempos, aparece sob formas diferentes, e aquelas formas que persistem por muuuito tempo são consideradas violência cultural. Essa violência cultural é tão...CULTURAL, assimilada, aprendida de maneira intencional ou não intencional, que é comum nem percebermos direito quando acontece (MINAYO, 2007). Portanto, nosso primeiro passo aqui vai ser tentar identificar algumas formas de violência – no caso, especificamente, contra a mulher – para depois pensar qual papel podemos exercer na cultura, que é dinâmica, viva, e se transforma constantemente.
                    </p>

          </div>
        </section>
        <section>
          <div className="container-black">
            <Frame
                tag = "CENA 2"
                title="Acolher"
                subtitle="Um vídeo criado por Márcia Rodrigues Rocha, mulher feminista e fonoaudióloga sanitarista, Inayá Ananias Weijenborg e editado por Rafael Marques da Silva - Coordenadoria de Apoio Acadêmico-CAAC/FCM/UNICAMP"
                videoSrc="https://www.youtube.com/embed/tI_tOSg7LVY"
            />
          </div>
        </section>
        {/* <TerceiroTexto/> */}
        <section className='text'>
              <div className="container">
                <h2>Está dando para criar imagens, rememorar cenas ou remeter a vivências no seu ambiente de trabalho?</h2>
                  <p>
                    A proposta é pensar especificamente na violência contra a mulher enquanto mulher, mas sabemos que é um fenômeno que se relaciona com outras violências. De acordo com o Manual para 
                    Atendimento às Vítimas de Violência na Rede de Saúde Pública do DF (2009), além da violência contra a mulher existe a violência contra crianças e adolescentes, contra pessoas idosas, violência intrafamiliar, negligência. Síndrome de Munchausen por Procuração, auto-extermínio/suicídio, outras formas de violência de gênero
                    (que não se restringe à díade homem-mulher — como retrata o livro sobre violência de gênero na aba "conteúdos úteis")</p>
                    <p>Além desse manual, podemos pensar em violência contra pessoas com deficiência, abandono, violência obstétrica, violência política, violência contra orientação sexual e identidade de gênero, RACISMO… E todas as violências aqui listadas se relacionam. 
                    </p>
                    <p>
                    Essa violência cultural que perpassa por anos e anos, gerações e gerações, tem um movimento cíclico: 
                    aprendemos e reproduzimos padrões de comportamento violentos, alimentando essas formas prejudiciais de se relacionar. 
                    É importante perceber o plano de fundo maior das relações sociais, históricas, culturais, mas como esta pesquisa de mestrado se ateve 
                    somente à violência contra mulher, vamos continuar desenvolvendo aqui essa questão em mais detalhes.
                    </p>

          </div>
        </section>
        <Share/>
        <FilterCategoria/>
        {/* <QuartoTexto/> */}
        <section className='text'>
              <div className="container">
                <h2>Não se Cale!</h2>
                  <p>
                  A violência contra a mulher (assim como outras violências e algumas doenças) são de notificação compulsória. O que isso significa? Que, como profissionais, não podemos nos calar diante de situações de suspeita ou confirmação de violência e precisamos avisar os outros serviços. A Portaria nº. 2.406/04/GM do Ministério da Saúde institui serviço de notificação compulsória de violência contra a mulher, e traz um modelo de ficha de notificação para preencher com algumas informações como telefone, endereço, nome, tipo de violência percebido, mesmo que não tenhamos todas as informações. Com esse documento, alimentamos um sistema de informação em que toda a rede de serviços pode se movimentar para atender essas violências, tentar minimizar danos, tentar interromper as violências cíclicas.
                    </p>
                    <p>Falando nisso… você sabia que a Prefeitura Municipal da Estância Turística de Ilha Solteira/SP possui sua própria ficha de notificação de violência contra a mulher? Pois é, houve todo um trabalho e encontros de profissionais de diferentes setores para estruturar o fluxo de atendimento a mulheres que sofreram violência e disso saiu a ficha de notificação.</p>
                    <p>Em resumo: temos um Protocolo de Fluxo de Atendimento a Mulheres Vítimas de Violência que diz que cada componente da rede de serviços do município tem responsabilidade no atendimento adequado a mulheres que sofreram violência. Ou seja, não é só CREAS e Delegacia de Polícia que lidam com essa questão, pois ela pode surgir em diversos lugares. Vamos assistir a esse vídeo que mostra como os serviços se relacionam:</p>
                    <Frame
                tag = "CENA 3"
                title="Juntar as Peças"
                subtitle="Um vídeo criado por Márcia Rodrigues Rocha, mulher feminista e fonoaudióloga sanitarista, Inayá Ananias Weijenborg e editado por Rafael Marques da Silva - Coordenadoria de Apoio Acadêmico-CAAC/FCM/UNICAMP"
                videoSrc="https://www.youtube.com/embed/r84xxU4E2Ho"
            />
          </div>
        </section>

        <section>
          <div className="container-black">
            <Frame
                tag = "CENA 3"
                title="Juntar as Peças"
                subtitle="Um vídeo criado por Márcia Rodrigues Rocha, mulher feminista e fonoaudióloga sanitarista, Inayá Ananias Weijenborg e editado por Rafael Marques da Silva - Coordenadoria de Apoio Acadêmico-CAAC/FCM/UNICAMP"
                videoSrc="https://www.youtube.com/embed/r84xxU4E2Ho"
            />
          </div>
        </section>
        {/* <QuintoTexto/> */}
        <section className='text'>
              <div className="container">
                <h2>Concluindo</h2>
                  <p>
                  Bastante coisa, né? Até agora, já vimos um conceito de violência,
            vários tipos de violência contra a mulher, qual nossa responsabilidade como profissionais  
            da rede pública e quem encaminha pra quem e quando! <br /> Agora, convenhamos,  
            falar sobre violência é uma coisa, outra coisa é lidar com aquele turbilhão de  
            emoções quando percebemos que aquela pessoa que está atendendo está possivelmente vivenciando alguma  
            violência simplesmente pelo fato dela ser mulher. Violência dói, está presente em todos os locais que permeamos, violência tira a voz. 
            Emocionalmente, costuma trazer um impacto para todos os envolvidos.
                    </p>
                    <p>Uma das formas de lidar com as emoções desagradáveis e paralisantes é 
                procurar conhecer mais sobre o tema, estudar, porque conhecimento liberta.   
                O conhecimento pelas mulheres de seus direitos pode libertá-las de situações violentas. Tanto o profissional   
                quanto as mulheres podem se beneficiar das informações que estamos discutindo aqui.</p>
                <p>
                Quando falamos que violência prejudica a autodeterminação e autoestima da pessoa, 
                precisamos pensar que nossa atuação como profissionais ( <strong>que pode reproduzir violência! </strong>)  
                precisa ser no sentido oposto.  
                O atendimento, dentro de suas especificidades, precisa respeitar e   
                fortalecer sua autonomia. Esse fortalecimento, construção de autonomia, autoconceito,  
                decisões, deve ser trabalhado por nós, profissionais,  
                mas precisamos entender que a vida também acontece lá fora.  
                Felizmente, as pessoas não se resolvem ou se complicam só dentro dos serviços,   
                mas também na comunidade no geral.
                </p>
                <p>
                Então, para finalizar,  
                vamos agora ampliar o lugar que ocupamos: somos profissionais que precisamos perceber violências,    
                precisamos reconhecer nossas violências, trabalhar essas questões em atendimento (e conosco)  
                e estamos inseridos num município que tem uma dinâmica que envolve bem mais que os serviços.   
                Fazemos parte da comunidade!
                </p>

          </div>
        </section>

        {/* <Noticias/> */}
        <Duvidas/>
      </main>

      <footer>
        <Footer/>
      </footer>

    </div>
  )
}
