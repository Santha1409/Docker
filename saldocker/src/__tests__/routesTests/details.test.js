


jest.dontMock('../../js/components/routes/details/Details');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
//import Details from '../comps/Details';
import Details from '../../js/components/routes/details/Details';


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
