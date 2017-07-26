import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Instr from "../../js/components/routes/instructions/Instr";

describe('Instr component test', () => {
  it('should render correctly', () => {
    // Render into document
    var accordion = TestUtils.renderIntoDocument( <Instr /> );
    expect(TestUtils.isCompositeComponent(accordion)).toBeTruthy();
  });
});
