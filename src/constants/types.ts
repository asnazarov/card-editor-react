export type CardType = {
  likes: itemLikes,
  link: string,
  name: string | number,
  _id: string,
};

export type itemLikes = Array<UserType>

export type UserType = {
  about: string,
  avatar: string,
  cohort: string,
  name: string,
  _id: string,
};

export type CreateCardType = {
  name: string | number,
  link: string | number,
};

export type CreateUserType = {
  about: string,
  name: string,
};
