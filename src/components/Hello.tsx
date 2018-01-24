import * as React from 'react';
import './Hello.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  onReset?: () => void;
  ajax?: () => void;
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement, onReset, ajax }: Props) {
    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }
    interface StringMap { [s: string]: string; }
    const stuff2: StringMap = {
      'name': 'pradeep',
      'age': '30',
      'native': 'cbe'
   };
    const key = 'name';
    const age = 'age';
    const n = 'native';
    console.log(stuff2);  
    console.log(stuff2[key]);  
    console.log(stuff2[age]);  
    console.log(stuff2[n]);  
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
        <div>
          <button onClick={ajax}>Ajax Req</button>
        </div>
      </div>
    );
  }

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}