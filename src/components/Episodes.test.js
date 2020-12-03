import React from 'react';
import { render } from '@testing-library/react';
import Episodes from './Episodes';

export const episodesFixture = [
  {
    name: "Chapter One: The Vanishing of Will Byers",
    id:3,
    number:1,
    summary: "A young boy mysteriously disappears"
  },
  {
    name: "Chapter Two: The Weirdo on Maple Street",
    id:4,
    number:2,
    summary: "while the search for the missing Will continues, Joyce tells Jim about a call"
  }
];

test("episodes render", () => {
  expect(() => render(<Episodes episodes={[]} />)).not.toThrow();
});

test("episodes shows data when rerendered with new submission data", () => {
  const { queryAllByTestId, rerender, getByText } = render(<Episodes episodes={[]}/>);

  expect(queryAllByTestId("episode")).toHaveLength(0)

  rerender(<Episodes episodes={episodesFixture}/>);
});

