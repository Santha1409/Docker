import React from 'react';
import {createRenderer} from 'react-test-renderer/shallow';
import {findAllWithType} from 'react-shallow-testutils';
//import Checks from '../comps/Checks';
//import Check from '../comps/Check';
import Checks from '../../js/components/routes/checks/Checks';
import Check from '../../js/components/routes/check/Check';



describe('Checks Component Testing', () => {

  it('Checks components must have nested Check component', () => {

    let input =  [
    {
      "DISPLAYSEQ": "2",
      "QUESTIONID": "330013",
      "ROLE": "Manager",
      "FORM": "SL33 Daily Manager Check",
      "SECTION": "Weekly Checks",
      "TYPE": "OK",
      "TEXT": "All country of origin and date codes are correct and clearly displayed on loose produce",
      "STATUS": "TODO"
    },
    {
      "DISPLAYSEQ": "1",
      "QUESTIONID": "330015",
      "ROLE": "Manager",
      "FORM": "SL33 Daily Manager Check",
      "SECTION": "Weekly Checks",
      "TYPE": "OK",
      "TEXT": "A potential reductions report is produced and followed on a daily basis",
      "STATUS": "GREEN"
    }];

    const renderer = createRenderer();
    const tree = renderer.render(<Checks checks={input}/>);
    expect(findAllWithType(tree, Check).length).toBe(2);
  });

});
