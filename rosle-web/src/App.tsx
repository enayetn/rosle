import rosleLogo from './assets/rosle.png'
import { BloomSize } from './gameplay-components/BloomSize'
import './App.css'
import { BloomShape } from './gameplay-components/BloomShape'
import { PetalCount } from './gameplay-components/PetalCount'
import { UsdaZone } from './gameplay-components/UsdaZone'
import { useCallback, useState } from 'react'
import { NiceCard } from './utility-components/NiceCard'
import { NiceUtilityButton } from './utility-components/NiceUtilityButton'
import { NiceShareButton } from './utility-components/NiceShareButton'
import { TypeAnimation } from 'react-type-animation'
import { getTodayDateString, ScoreHandler } from './gameplay-components/ScoreHandler'
import type { IScore } from './gameplay-components/ScoreHandler'
import { roses } from './gameplay-components/RoseStore'

// Hard coded consts
const NUM_QUESTIONS = 4;
interface IGameState {
  currentQuestion: number
  currentAnswer: any
}

function App() {
  // Hydrate current score & question from localStorage
  const [score, setScore] = useState<IScore>({ scores: ScoreHandler().getTodayScore().scores });
  const [gameState, setGameState] = useState<IGameState>({ currentQuestion: ScoreHandler().getTodayScore().scores.length, currentAnswer: "" });
  
  // TODO: Pull rose of the day 
  const [rose] = useState<IRose>(roses[getTodayDateString()]);

  if (!rose) {
    return <div>🥀 No rosle today because Nabil hasn't updated the database 🥀</div>
  }

  // Answer state handling
  const [answerExplanation, setAnswerExplanation] = useState<string>("");
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  if (gameState.currentQuestion > NUM_QUESTIONS - 1) {
    setGameState({ ...gameState, currentQuestion: NUM_QUESTIONS - 1 });
  }

  const scoreQuestion = () => {
    const currentAnswer= gameState.currentAnswer;
    if (!currentAnswer || currentAnswer === null) {
      alert("Please answer the question first!");
      return;
    }
    const currentQuestion = gameState.currentQuestion;
    let isCorrect;
    switch(currentQuestion) {
      case 0:
        // Bloom Size
        isCorrect = rose.bloom_size.includes(currentAnswer);
        if (rose.bloom_size.length === 1) {
          setAnswerExplanation(`The ${rose.name} has blooms that are ${rose.bloom_size[0]} inches in diameter.`);
        } else {
          setAnswerExplanation(`The ${rose.name} has blooms that are between ${rose.bloom_size[0]} and ${rose.bloom_size[1]} inches in diameter.`);
        }
        break;
      case 1:
        // Bloom Shape
        isCorrect = rose.bloom_shape === currentAnswer;
        setAnswerExplanation(`${rose.name} has ${rose.bloom_shape} blooms.`);
        break;
      case 2:
        // Petal Count
        isCorrect = rose.petal_count === currentAnswer;
        setAnswerExplanation(`${rose.name} has ${rose.petal_count} blooms.`);
        break;
      case 3:
        // USDA Zone
        isCorrect = rose.min_usda_zone === currentAnswer;
        setAnswerExplanation(`${rose.name} optimally grows in zone ${rose.min_usda_zone} or higher`);
        break;
      default:
        // Error out
        isCorrect = false;
        console.error("Invalid question number");
    }

    const currentScore = score.scores;
    currentScore.push(isCorrect);
    setScore({scores: currentScore});
    setIsAnswered(true);
    ScoreHandler().setScore({ scores: currentScore });
  }

  const cleanupAndNextQuestion = () => {
    if (gameState.currentQuestion === 3) return;
    setIsAnswered(false);
    clearCurrentAnswer();
    setCurrentQuestion(gameState.currentQuestion + 1);
  }


  const setCurrentAnswer = useCallback((answer: any) => {
    setGameState({ ...gameState, currentAnswer: answer });
  }, [gameState]);


  const clearCurrentAnswer = useCallback(() => {
    const newGameState = {...gameState};
    delete gameState.currentAnswer;
    setGameState(newGameState);
  }, [gameState]);

  const setCurrentQuestion = (question: number) => {
    setGameState({ ...gameState, currentQuestion: question });
  };

  const getDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    return mm + '/' + dd + '/' + yyyy;
  };

  const parseScore = (score: boolean) => {
    if (score === true) {
      return "🌹";
    }
    if (score === false) {
      return "❌";
    }
    return "◼️"
  }

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="mx-auto px-4 py-2 sm:px-6 lg:px-8">
          <img src={rosleLogo}
            className="size-8 inline-block float-left"
            alt="Rosle" />
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 inline-block">Rosle</h1>
        </div>
      </header>
      <main>

        <div className="mx-auto max-w-7xl m-2">
          <div className="grid sm:grid-cols-3 gap-4">
            <img className="max-h-48 px-24" src={rose.img} />
            <div className="col-span-2 sm:m-10">
              Today's rose is the
              <div className="text-xl"><a href={rose.url}><b>{rose.name}</b></a></div>
              
              {
                score.scores.length === NUM_QUESTIONS
                &&<>
                    <div className="sm:m-4 grid grid-cols-4 sm:gap-4">
                      {/* TODO: Refactor to be more data driven */}
                      <NiceCard><span className="text-xl">{parseScore(score.scores[0])}</span></NiceCard>
                      <NiceCard><span className="text-xl">{parseScore(score.scores[1])}</span></NiceCard>
                      <NiceCard><span className="text-xl">{parseScore(score.scores[2])}</span></NiceCard>
                      <NiceCard><span className="text-xl">{parseScore(score.scores[3])}</span></NiceCard>
                    </div>
                  <NiceShareButton output={`${getDate()} \n ${score.scores.map(parseScore).join(" ")}`} />
                  </>}
            </div>
          </div>

          

          {/* TODO: Refactor to be more data driven */}
          { score.scores.length < NUM_QUESTIONS ? 
            <>
              <div className="grid grid-cols-2 bg-gray-200 py-4 my-4">
                <b className="text-lg m-3 text-pink-800">Question {gameState.currentQuestion + 1} of {NUM_QUESTIONS}</b>
                <div>
                  {
                    isAnswered && gameState.currentQuestion < NUM_QUESTIONS - 1 ? <NiceUtilityButton title="Next" onclick={cleanupAndNextQuestion} /> : null 
                  }
                  {
                    !isAnswered ? <NiceUtilityButton title="Submit" onclick={() => {
                      scoreQuestion();
                      return;
                    }} /> : null
                  }
                  
                </div>
              </div>
              <div className={isAnswered? "pointer-events-none" : ""}>
                {gameState.currentQuestion === 0 ? <BloomSize updateAnswer={setCurrentAnswer}/> : null}
                {gameState.currentQuestion === 1 ? <BloomShape updateAnswer={setCurrentAnswer}/> : null}
                {gameState.currentQuestion === 2 ? <PetalCount updateAnswer={setCurrentAnswer}/> : null}
                {gameState.currentQuestion === 3 ? <UsdaZone updateAnswer={setCurrentAnswer}/> : null}
              </div> 
            </>
            : null
          }

          {isAnswered ? 
            <TypeAnimation
              sequence={[
                `${(score.scores[gameState.currentQuestion] ? "✅" : "❌")} ${answerExplanation}`
              ]}
              wrapper="p"
              speed={75}
              style={{ fontSize: '18px', display: 'inline-block' }}
            />
            : null}

        </div>
      </main>
    </>
  )
}

export default App
