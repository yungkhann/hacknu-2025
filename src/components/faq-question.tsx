'use client'

import { useEffect, useMemo, useState } from "react";

export const FAQQuestion = ({ question, answer }: { question: string, answer: string}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [answerLength, setAnswerLength] = useState(0);

  useEffect(() => {
    if(isOpen) {
      const interval = setInterval(() => {
        setAnswerLength(prevLength => {
          if (prevLength < answer.length) {
            return prevLength + 1;
          } else {
            clearInterval(interval);
            return prevLength;
          }
        });
      }, 16);
      return () => clearInterval(interval);
    } else {
      setAnswerLength(0);
    }
  }, [isOpen, answer.length]);

  return (
    <div className="flex p-5 items-start gap-4 self-stretch border-dashed	border-2 border-dashed-border">
      <p className="flex-1">
        {question}
        {isOpen && 
          <>
            <br/> 
            <br />
            <span dangerouslySetInnerHTML={{
              __html: answer.substring(0, answerLength) + (answerLength < answer.length ? '_' : '')
            }} />
          </>}
      </p>
      <p onClick={() => setIsOpen(prevOpen => !prevOpen)}>
        [{isOpen ? 'x' : '+'}]
      </p>
    </div>
  );
}