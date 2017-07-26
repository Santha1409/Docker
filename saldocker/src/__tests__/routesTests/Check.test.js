//jest.dontMock('../comps/accordionComponent');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import {createRenderer} from 'react-test-renderer/shallow';
import {findAllWithType, findWithClass} from 'react-shallow-testutils';

import Check from "../../js/components/routes/check/Check";

describe('check', () => {

it('Check color of component based on props passed', function() {

  let car1 =  {
        "DISPLAYSEQ": "1",
        "QUESTIONID": "330013",
        "ROLE": "Manager",
        "FORM": "SL33 Daily Manager Check",
        "SECTION": "Weekly Checks",
        "TYPE": "OK",
        "TEXT": "All country of origin and date codes are correct and clearly displayed on loose produce",
        "STATUS": "TODO"
      };

  let car2 =     {
        "DISPLAYSEQ": "2",
        "QUESTIONID": "330015",
        "ROLE": "Manager",
        "FORM": "SL33 Daily Manager Check",
        "SECTION": "Weekly Checks",
        "TYPE": "OK",
        "TEXT": "A potential reductions report is produced and followed on a daily basis",
        "STATUS": "GREEN"
      };

  let color1;
      if(car1.STATUS == "TODO") { color1 = "blue";}
      else { color1 = car1.STATUS;}

  let color2;
      if(car2.STATUS == "TODO") { color2 = "blue";}
      else { color2 = car2.STATUS;}


      const renderer = createRenderer();
      const tree = renderer.render(<Check text={car1.TEXT} status={car1.STATUS} qid={car1.QUESTIONID} color={color1}/>);

      const element = findWithClass(tree, "tchec");
      expect(element.props.children.props.style.color).toBe(color1);

    // var accordion = TestUtils.renderIntoDocument( <Check text={car1.TEXT} status={car1.STATUS} qid={car1.QUESTIONID} color={color1}/> );
    // var text = TestUtils.findRenderedDOMComponentWithClass(accordion, 'tchec');
    // console.log(text.length);
    // console.log(text.getDOMNode());
    // expect(text.style.color).toEqual(color1);
  });

});
