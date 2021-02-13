import styled from 'styled-components';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Link from '../src/components/Link'
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import LogoAlura from '../src/components/LogoAlura';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
export const Logo = styled.div

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do useState', name, setName);
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz Imersão Alura</title>
      </Head>
      <QuizContainer>
        <LogoAlura/>
        <Widget
          as={motion.section}
          transition={{delay: 0.0, duration: 0.5}}
          variants={{
            show: {opacity: 1, y:'0'},
            hidden: { opacity: 0, y:'100%'}
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
              <h1>The legend of zelda</h1>
            </Widget.Header>
          <Widget.Content>
            <p>
              Teste, neste quiz, seus conhecimentos sobre X e veja se você manja muito sobre X.
            </p>
            <form onSubmit={function (infosDoEvento){
              infosDoEvento.preventDefault();
              
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissao por meio do react');

              //router manda para a próxima pagina
            }}>
              <Input 
                onChange = {function (infosDoEvento){
                  console.log(infosDoEvento.target.value);
                  //State
                  //name = infosDoEvento.target.value;
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Diz ai seu nome"/>
              <Button type="submit" disabled={name.length === 0}>
                {`Vamos iniciar o quiz ${name}!`}
              </Button>
            </form>
          </Widget.Content>
          
        </Widget>
        <Widget
        as={motion.section}
        transition={{delay: 0.5, duration: 0.5}}
        variants={{
          show: {opacity: 1},
          hidden: { opacity: 0}
        }}
        initial="hidden"
        animate="show"
        >
        <Widget.Header>
          <h1>Quizes da Galera</h1>
          </Widget.Header>
        <Widget.Content>
          <p> Veja, também, alguns outros quizes incríveis feitos por outros alunos da imersão:</p>
          <ul>
          {db.external.map((linkExterno) => {
            const [projectName, githubUser] = linkExterno
            .replace(/\//g,'')
            .replace('https:','')
            .replace('.vercel.app','')
            .split('.');
            return (
              <li key={linkExterno}>
                <Widget.Topic 
                as={Link}
                href={`/quiz/${githubUser}___${projectName}}`}>
                  {`${githubUser}/${projectName}}`}
                </Widget.Topic>
              </li>
            )
            }
          )}
          </ul>
          
        </Widget.Content>
        </Widget>
        <Footer/>
    </QuizContainer>
    <GitHubCorner/>
    </QuizBackground>
    
  );

}
