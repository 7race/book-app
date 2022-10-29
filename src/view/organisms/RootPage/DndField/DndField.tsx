import { FC } from 'react';

type DndFieldProps = {
  children: [
    {
      id: string;
      title: string;
      imageLinks: { smallThumbnail: string; thumbnail: string };
    }
  ];
};

export const DndField: FC<DndFieldProps> = ({ children }) => (
  <div>
    {children.map((book) => (
      <div key={book.id}>
        <img src={book.imageLinks.smallThumbnail} alt='' />
        <div>{book.title}</div>
      </div>
    ))}
  </div>
);
