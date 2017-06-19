import * as React from 'react';
import './assets/styles/stylesheets/app.css';
import Hello, {getExclamationMarks} from './Components/Hello';

const logo = require('./assets/images/logo.svg');

export interface SumProps {
  name: string;
  enthusiasmLevel?: number;
}

class App extends React.Component<{}, null> {

  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: number[], target: number): number[] | boolean {

    for (let i = 0; i < nums.length; i++) {

      let remainingNum = target - nums[i];
      let foundIdxForCal = nums.indexOf(remainingNum);

      if (foundIdxForCal > -1 && foundIdxForCal !== i) {
        return [i, foundIdxForCal];
      }
    }

    return [];
  }

  render() {

    let nums = [3, 2, 4], target = 6;

    this.twoSum(nums, target);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dognose</h2>
        </div>
        <div className="App-intro">
          <code>{getExclamationMarks(5)}</code>
          <Hello name={'dognose'} enthusiasmLevel={5} />
        </div>
        <div className="effects" />
      </div>
    );
  }
}

export default App;
