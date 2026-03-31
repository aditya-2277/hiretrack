export type AppUser = {
  name: string;
  role: string;
};

export const currentUser: AppUser = {
  name: "John Smith",
  role: "Senior Software Developer",
};
