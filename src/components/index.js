
import { useEffect, useState } from "react";


export default function index({
    data,
    questionNumber,
    setQuestionNumber,
    setTimeOut,
  }) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");

    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
      }, [data, questionNumber]);
    
      const delay = (duration, callback) => {
        setTimeout(() => {
          callback();
        }, duration);
      };
    

      const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName("answer active");
        delay(3000, () => 
            setClassName(a.correct ? "answer correct" : "answer wrong")
          );
        delay(5000, () => {
            if (a.correct) {
                setQuestionNumber((prev) => prev + 1);
                setSelectedAnswer(null);
            
            } else {
                setTimeOut(true);
              }
            }
            );
         
    };
        

    return(

        <div className='index'>
            <div className='question'>{question?.question}</div>
            <div className='answers'>
               {question?.answers.map((a) =>(
                    <div className={selectedAnswer === a ? className : "answer"}
                    onClick={()=>handleClick(a)}>
                        {a.text}</div>

                ))}

            </div>


        </div>


    )

}
