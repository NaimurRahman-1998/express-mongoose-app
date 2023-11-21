
export interface Address {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  }
  
export interface Student {
    name: string;
    age?: number;
    gender : "Male" | "Female"
    address?: Address;
    bloodGroup?: "A" | "A+" | "B" | "B+" | "O" | "O+" | "AB" | "AB-" | "AB+";
  }