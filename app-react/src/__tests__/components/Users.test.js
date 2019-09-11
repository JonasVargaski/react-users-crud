import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Users from '~/pages/Users';

jest.mock('react-redux');

describe('Users component', () => {
  it('should render users list', () => {
    useSelector.mockImplementation(cb =>
      cb({
        users: {
          users: [{}],
          totalUsers: 10,
        },
        profile: {
          profile: {
            id: 15,
            name: 'Jonas',
            LastName: 'Vargaski',
            isAdmin: true,
            active: true,
          },
        },
      })
    );

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
  });
});
