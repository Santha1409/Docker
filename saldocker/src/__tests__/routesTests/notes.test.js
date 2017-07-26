import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
//import Notes from '../comps/Notes';
import Notes from "../../js/components/routes/notes/Notes";

describe('Notes', () => {
  it('should exists', () => {
    // Render into document
    var accordion = TestUtils.renderIntoDocument( <Notes /> );
    expect(TestUtils.isCompositeComponent(accordion)).toBeTruthy();
  });
});
