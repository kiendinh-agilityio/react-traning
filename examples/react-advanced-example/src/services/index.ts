import axios from 'axios';
import { BASE_API } from '@/constants';

export interface Student {
  id: string;
  fullName: string;
  email: string;
  group: string;
  status: 'active' | 'inactive';
}

export const fetchStudents = async (): Promise<Student[]> => {
  const { data } = await axios.get(`${BASE_API}/user`);
  return data;
};

export const addStudent = async (
  newStudent: Omit<Student, 'id'>
): Promise<Student> => {
  const { data } = await axios.post(`${BASE_API}/user`, newStudent);
  return data;
};

export const deleteStudent = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_API}/user/${id}`);
};
