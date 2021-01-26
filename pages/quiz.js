import styled from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import LogoAlura from '../src/components/LogoAlura';
import QuestionBox from '../src/components/QuestionBox';


/*const BackgroundImage = styled.div`
    background-image: url(${db.bg});
    flex: 1;
    background-size: cover;
    background-position: center;
    `;
*/
export const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 45px;
    margin: auto 10%;
    @media screen and (max-width: 500px){
      margin: auto;
      padding: 15px
    }
    `;

export const Logo = styled.div

export default function QuizPage() {
  
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz Imersão Alura</title>
      </Head>
      <QuizContainer>
        <LogoAlura/>
        <Widget>
          <QuestionBox>
              <QuestionBox.Header>
                  Pergunta 01
              </QuestionBox.Header>
              <QuestionBox.Content>
                  <p>
                    Qual a capital de Pernambuco?
                  </p>
                  <ul>
                      <li>Caruaru</li>
                      <li>Recife</li>
                      <li>Petrolina</li>
                      <li>Jaboatão dos Guararapes</li>
                      <li>Porto de Galinhas</li>
                  </ul>

                  <button>
                      CONFIRMAR
                  </button>
              </QuestionBox.Content>
              
          </QuestionBox>
        </Widget>
        <Footer/>
    </QuizContainer>
    <GitHubCorner/>
    </QuizBackground>
    
  );

}
