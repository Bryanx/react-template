import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

test('displays the main page', () =>
{
    expect(App.title).toBe("Hello World!");
});