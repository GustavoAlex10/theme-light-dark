import React from 'react';
import { render, screen } from "@testing-library/react";
import App from "../App";


function renderApp(){
    return render(<App />) 
}

describe("Check header app", () => {

    test('check if title exists', () => {   
        renderApp()
        const title = screen.getByText('Hello World');
        expect(title).toBeInTheDocument();
    });

    test('check if button switch is render', () => {
        renderApp()
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    })

});