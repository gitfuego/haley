import React from 'react';
import FadeIn from '../components/FadeIn/FadeIn';
import Image from 'next/image';
import AIContainer from '../components/AIContainer/AIContainer';

export default function Page() {
  return (
    <div className='flex col'>
      <h1>Hi, Haley!</h1>
      <section className='flex col'>
        <AIContainer />
      </section>
      <section>
        <FadeIn>
            <div className='picholder'>
              <span className='flex'> 
                <div>
                  <Image width='100' height='100' src='/strawberry.png'/>
                </div>
                <div>
                  <Image width='100' height='100' src='/bunny.png'/>
                </div>
                <div>
                  <Image width='100' height='100' src='/cheese.png'/>
                </div>
              </span>
              <span className='flex'> 
                <div>
                  <Image width='100' height='100' src='/strawberry.png'/>
                </div>
                <div>
                  <Image width='100' height='100' src='/bunny.png'/>
                </div>
                <div>
                  <Image width='100' height='100' src='/cheese.png'/>
                </div>
              </span>
            </div>
        </FadeIn>
      </section>
    </div>
  );
}