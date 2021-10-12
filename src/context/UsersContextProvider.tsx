import React, { useState } from 'react';

import { User } from '../types/interfaces';
import UsersContext from './users-context';

const UsersContextProvider: React.FC = ({ children }) => {
  const [listTargetGebetan, setListTargetGebetan] = useState<User[]>([]);

  const listGebetan: User[] = [
    {
      id: 'uid-1',
      name: 'Shinta Kusuma Dewi',
      gender: 'female',
      bio: 'Aku suka cowo macho',
      photo: 'https://i.pravatar.cc/300?img=28',
    },
    {
      id: 'uid-2',
      name: 'Tony Hehe',
      gender: 'male',
      bio: 'Aku cowo humoris',
      photo: 'https://i.pravatar.cc/300?img=53',
    },
    {
      id: 'uid-3',
      name: 'Bella Humorisa',
      gender: 'female',
      bio: 'Aku suka ketawa',
      photo: 'https://i.pravatar.cc/300?img=32',
    },
    {
      id: 'uid-4',
      name: 'Joko Pintar',
      gender: 'male',
      bio: 'Aku cowo jenius',
      photo: 'https://i.pravatar.cc/300?img=59',
    },
    {
      id: 'uid-5',
      name: 'John Thor',
      gender: 'male',
      bio: 'Aku tinggal di Asgard',
      photo: 'https://i.pravatar.cc/300?img=11',
    },
  ];

  const addTargetGebetan = ({ id, name, gender, bio, photo }: User) => {
    const newTargetGebetan: User = { id, name, gender, bio, photo };
    const updatedListTargetGebetan = [...listTargetGebetan, newTargetGebetan];

    setListTargetGebetan(updatedListTargetGebetan);
  };

  const deleteTargetGebetan = (id: string) => {
    const updatedListTargetGebetan = listTargetGebetan.filter((user) => user.id !== id);

    setListTargetGebetan(updatedListTargetGebetan);
  };

  return (
    <UsersContext.Provider value={{
      listGebetan,
      listTargetGebetan,
      addTargetGebetan,
      deleteTargetGebetan,
    }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
