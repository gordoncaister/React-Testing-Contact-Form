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

test('inputs are correct type', () => {

    const { getByLabelText } = render(<ContactForm />);
    
        const email = getByLabelText(/email/i);
        
        
        expect(email).toHaveAttribute("type","email")

    });

test("make sure form is submitting", ()=> {

    const { getByLabelText, getByText } = render(<ContactForm />);
     
    const firstName = getByLabelText(/first name/i); 
    const lastName = getByLabelText(/last Name/i);
    const email = getByLabelText(/email/i);
    const message = getByLabelText(/message/i);

    fireEvent.change(firstName, {target: {value: "gordon"}});
    fireEvent.change(lastName, {target: {value: "caister"}});
    fireEvent.change(email, {target: {value: "gordon@gmail.com"}});
    fireEvent.change(message, {target: {value: "gordon is a clown"}});

    expect(firstName.value).toBe("gordon");
    expect(lastName.value).toBe("caister");
    expect(email.value).toBe("gordon@gmail.com");
    expect(message.value).toBe("gordon is a clown");




});