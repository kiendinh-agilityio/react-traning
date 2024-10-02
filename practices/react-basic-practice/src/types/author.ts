export interface Author {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  position: string;
  roles: string;
  status: 'Active' | 'Inactive';
  date: string;
}
