import React, { useState } from 'react';
import { useInterval } from 'react-use';
import styled from 'styled-components'

const Rain = () => {
      const [emojisToRender, setEmojiToRender] = useState([{key: 0 , emoji: '☠️', offset: 0 }])

      useInterval(() => {
        if (emojisToRender.length > 10 ) {
            emojisToRender.shift();
        }
        const offset = Math.floor(Math.random() * 1000);
        const key = offset + Math.floor(Math.random() * 100000);
        const emoji = '☠️';

        emojisToRender.push({offset, key, emoji})
          setEmojiToRender([...emojisToRender])
      }, 500);

        return(
           <SuperContainer>
              {emojisToRender.map(({key, emoji, offset}) => {
               return (
                  <EmojiContainer key={key} offset={offset}>
                    {emoji}
                  </EmojiContainer>  

               )
             })}   
          </SuperContainer>
        )
               
       
}
function App() {
  return (   
     <>
        <Rain/>        
      </>
    
  );
}

export default App;

const SuperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const EmojiContainer = styled.div`
  @keyframes falldown {
    0% { margin-top: 0; }
    100% { margin-top: 400px; }
    }

    margin-left: ${props => props.offset}px;

    font-size: 48px;
    animation-name: falldown;
    animation-duration: 4s;
`;
