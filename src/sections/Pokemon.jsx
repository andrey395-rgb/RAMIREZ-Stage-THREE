import React from 'react';
import style from '../../src/sections/Pokemon.module.css';
function Pokemon() {
  return (
<section className='Poketitle'>
    <div className={style.container}>Pokédex</div>
    <p className={style.phrase}>Gotta catch 'em all!</p>
</section>
)
}

export default Pokemon;