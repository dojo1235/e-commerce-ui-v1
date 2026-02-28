export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  status: 'Active' | 'Banned' | 'Deleted';
  role: 'User' | 'Admin';
  joinedDate: string;
}

export const users: User[] = [
  {
    id: "USR-001",
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://i.pravatar.cc/150?u=john",
    status: "Active",
    role: "User",
    joinedDate: "2023-10-12"
  },
  {
    id: "USR-002",
    name: "Jane Smith",
    email: "jane@example.com",
    avatar: "https://i.pravatar.cc/150?u=jane",
    status: "Banned",
    role: "User",
    joinedDate: "2023-11-05"
  },
  {
    id: "USR-003",
    name: "Mike Johnson",
    email: "mike@example.com",
    avatar: "https://i.pravatar.cc/150?u=mike",
    status: "Active",
    role: "User",
    joinedDate: "2024-01-15"
  },
  {
    id: "USR-004",
    name: "Sarah Williams",
    email: "sarah@example.com",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    status: "Deleted",
    role: "User",
    joinedDate: "2023-08-20"
  },
  {
    id: "USR-005",
    name: "Alex Brown",
    email: "alex@example.com",
    avatar: "https://i.pravatar.cc/150?u=alex",
    status: "Active",
    role: "Admin",
    joinedDate: "2023-05-10"
  },
  {
    id: "USR-006",
    name: "Emma Davis",
    email: "emma@example.com",
    avatar: "https://i.pravatar.cc/150?u=emma",
    status: "Active",
    role: "User",
    joinedDate: "2024-02-01"
  },
  {
    id: "USR-007",
    name: "Liam Wilson",
    email: "liam@example.com",
    avatar: "https://i.pravatar.cc/150?u=liam",
    status: "Active",
    role: "User",
    joinedDate: "2024-02-05"
  },
  {
    id: "USR-008",
    name: "Olivia Martinez",
    email: "olivia@example.com",
    avatar: "https://i.pravatar.cc/150?u=olivia",
    status: "Active",
    role: "User",
    joinedDate: "2024-02-10"
  },
  {
    id: "USR-009",
    name: "Noah Taylor",
    email: "noah@example.com",
    avatar: "https://i.pravatar.cc/150?u=noah",
    status: "Active",
    role: "User",
    joinedDate: "2024-02-12"
  },
  {
    id: "USR-010",
    name: "Ava Anderson",
    email: "ava@example.com",
    avatar: "https://i.pravatar.cc/150?u=ava",
    status: "Active",
    role: "User",
    joinedDate: "2024-02-15"
  },
  {
    id: "USR-011",
    name: "Ethan Thomas",
    email: "ethan@example.com",
    avatar: "https://i.pravatar.cc/150?u=ethan",
    status: "Active",
    role: "User",
    joinedDate: "2024-02-18"
  },
  {
    id: "USR-012",
    name: "Sophia Jackson",
    email: "sophia@example.com",
    avatar: "https://i.pravatar.cc/150?u=sophia",
    status: "Active",
    role: "User",
    joinedDate: "2024-02-20"
  },
  {
    id: "USR-013",
    name: "James White",
    email: "james@example.com",
    avatar: "https://i.pravatar.cc/150?u=james",
    status: "Active",
    role: "Admin",
    joinedDate: "2023-06-15"
  },
  {
    id: "USR-014",
    name: "Isabella Harris",
    email: "isabella@example.com",
    avatar: "https://i.pravatar.cc/150?u=isabella",
    status: "Active",
    role: "Admin",
    joinedDate: "2023-07-20"
  },
  {
    id: "USR-015",
    name: "Mason Martin",
    email: "mason@example.com",
    avatar: "https://i.pravatar.cc/150?u=mason",
    status: "Active",
    role: "Admin",
    joinedDate: "2023-08-25"
  },
  {
    id: "USR-016",
    name: "Mia Thompson",
    email: "mia@example.com",
    avatar: "https://i.pravatar.cc/150?u=mia",
    status: "Active",
    role: "Admin",
    joinedDate: "2023-09-30"
  }
];
