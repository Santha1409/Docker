//jest.dontMock('../comps/accordionComponent');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import {createRenderer} from 'react-test-renderer/shallow';
import {findAllWithType, findWithClass} from 'react-shallow-testutils';

import Check from "../../dev/js/components/routes/check/Check";

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

import React from 'react';
import {createRenderer} from 'react-test-renderer/shallow';
import {findAllWithType} from 'react-shallow-testutils';
//import Checks from '../comps/Checks';
//import Check from '../comps/Check';
import Checks from '../../dev/js/components/routes/checks/Checks';
import Check from '../../dev/js/components/routes/check/Check';



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




jest.dontMock('../../dev/js/components/routes/details/Details');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
//import Details from '../comps/Details';
import Details from '../../dev/js/components/routes/details/Details';


describe('Details Component Test', () => {

it('Details should render number of items passed as props', function() {

var input =  {
    "Date Created": "08 May 2017 14:12",
    "Created": "08 May 2017 14:12",
    "Created By": "9999.Pramod",
    "Compliance Date": "08 May 2017 00:00",
    "User Role": "Manager",
    "Owner": "9999.pramod",
    "Draft": "true",
    "IP Address": "94.125.20.102:63924",
    "Training": "No",
    "Period": "3",
    "Week": "11",
    "Day": "1",
    "Hour": "",
    "New Actions": "No",
    "Store1": "TAAP",
    "Book1": "SL33 Produce",
    "Form1": "SL33 Daily Produce Check",
    "Compliance Time": "0"
};

let noofdetails = Object.keys(input).length;

    var accordion = TestUtils.renderIntoDocument( <Details details={input}/> );
    var headers = TestUtils.scryRenderedDOMComponentsWithClass(accordion, 'test');
    //var contents = TestUtils.scryRenderedDOMComponentsWithClass(accordion, 'test');

    expect(headers.length).toEqual(noofdetails);
    //expect(contents.length).toEqual(2);

    //expect(headers[0].textContent).toEqual('Title 1');
    //expect(headers[1].textContent).toEqual('Title 2');

    //expect(contents[0].textContent).toEqual('Content belongs to title 1');
    //expect(contents[1].textContent).toEqual('Content belongs to title 2');
  });

});

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Instr from "../../dev/js/components/routes/instructions/Instr";

describe('Instr component test', () => {
  it('should render correctly', () => {
    // Render into document
    var accordion = TestUtils.renderIntoDocument( <Instr /> );
    expect(TestUtils.isCompositeComponent(accordion)).toBeTruthy();
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
//import Notes from '../comps/Notes';
import Notes from "../../dev/js/components/routes/notes/Notes";

describe('Notes', () => {
  it('should exists', () => {
    // Render into document
    var accordion = TestUtils.renderIntoDocument( <Notes /> );
    expect(TestUtils.isCompositeComponent(accordion)).toBeTruthy();
  });
});
