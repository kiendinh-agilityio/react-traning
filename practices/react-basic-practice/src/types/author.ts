export interface Author {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  position: string;
  roles: string[];
  status: 'active' | 'inactive';
  date: string;
}
