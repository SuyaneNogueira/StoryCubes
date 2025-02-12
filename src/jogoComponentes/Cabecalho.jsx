import React, { useState } from 'react'
import './Cabecalho.css'

function Cabecalho() {
    const emojis = [ '👀', '❤', '🤴🏻', '❤️‍🔥', '⚜️','📜','🫶🏻','❤️','🦋','🖇️','🫠','🤌🏻','💗','🔐','💫','💙','🧿','🌍','♥️','🪞','🕊️','🤍','✨','💐','🫶🏻','🥹','❤','☁️','♡','🪐','🎧'] 
    const [emoji, setEmoji] = useState('')
    // const icones = []
    const SorteioEmoji = () => {
        const sorteio = Math.floor(Math.random()* emojis.length);  
        const emojiSordeado = emojis[sorteio];
        setEmoji(emojiSordeado);
    }
  
  return (
    <div className='corpo'>
        <h2>Benvindo ao Story cubes</h2>
       <p>Crie a sua História...</p> 
       <div style={{fontSize:'300%', display: 'flex', justifyContent: 'center'}}> 
         {emoji ? emoji : ''}
       </div>
       

        <div style={{ }} >
            <button onClick={SorteioEmoji} className='botao-comecar'>Começar</button>
        </div>
        <div>
          
        </div>

      
    </div>
  )
}

export default Cabecalho
