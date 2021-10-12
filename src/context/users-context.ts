import React, { createContext } from 'react';
import { User } from '../types/interfaces';

interface Context {
  listGebetan: User[],
  listTargetGebetan: User[],
  addTargetGebetan: (targetUser: User) => void,
  deleteTargetGebetan: (id: string) => void,
};

const UsersContext = createContext<Context>({
  listGebetan: [],
  listTargetGebetan: [],
  addTargetGebetan: () => { },
  deleteTargetGebetan: () => { },
});

export default UsersContext;
