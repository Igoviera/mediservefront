export interface Doctor{
  id: number;
  name: string;
  imgUrl: string;
  crm: string;
  queryValue: number;
  specialties: string[];
  clinicId: number;
  userId: number;
  status: string;
};