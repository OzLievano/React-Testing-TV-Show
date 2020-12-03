import React from 'react';
import { fireEvent,render,wait, waitFor } from '@testing-library/react';
import App from './App'
import {episodesFixture} from './components/Episodes.test'

test("App renders",()=>{
    const {debug} = render(<App/>)
    debug()
})

test("App fetches and renders missions data", async ()=>{
    // tell the test system what we want the show data to return 
    const {getByText, queryAllByTestId,debug} = render(<App/>)

    getByText(/fetching data.../i)
    //waits for state update to occur
    await waitFor(()=>{
        
    });
    debug()
})