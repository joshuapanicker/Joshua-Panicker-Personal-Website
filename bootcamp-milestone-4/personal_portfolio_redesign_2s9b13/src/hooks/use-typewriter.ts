import { useState, useEffect, useRef } from 'react';

export function useTypewriter(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2200
) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const wordsRef = useRef(words);
  wordsRef.current = words;

  useEffect(() => {
    const currentWord = wordsRef.current[wordIndex % wordsRef.current.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex(prev => (prev + 1) % wordsRef.current.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, typingSpeed, deletingSpeed, pauseDuration]);

  return { text: displayText, isTyping: !isDeleting };
}
