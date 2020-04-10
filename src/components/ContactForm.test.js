import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from "./ContactForm"

test("renders App without crashing", () => {
    render(<ContactForm />);
  });

test('inputs are visible', () => {

const { getByLabelText } = render(<ContactForm />);


    getByLabelText(/first name/i); 
    getByLabelText(/last Name/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);
});

test('inputs are correct type', () => {

    const { getByLabelText } = render(<ContactForm />);
    
        const email = getByLabelText(/email/i);
        
        
        expect(email).toHaveAttribute("type","email")

    });