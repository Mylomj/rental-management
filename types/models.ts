export type UserRole = 'admin' | 'tenant';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  photoUrl?: string | null;
}

export interface DashboardSummary {
  totalProperties: number;
  occupiedUnits: number;
  pendingApplications: number;
  totalRentCollected: number;
  outstandingBalance: number;
}

export type ActivityType = 'lease' | 'application' | 'payment' | 'request';

export interface ActivityItem {
  id: string;
  title: string;
  subtitle: string;
  type: ActivityType;
  date: string;
}

export interface Lease {
  id: string;
  propertyAddress: string;
  unit: string;
  startDate: string;
  endDate: string;
  rentAmount: number;
  landlordName: string;
}

export type PaymentStatus = 'upcoming' | 'paid' | 'overdue';

export interface Payment {
  id: string;
  label: string;
  dueDate: string;
  amount: number;
  status: PaymentStatus;
}

export type MaintenanceStatus = 'open' | 'in_progress' | 'closed';

export interface MaintenanceRequest {
  id: string;
  title: string;
  createdAt: string;
  status: MaintenanceStatus;
}

export type RatingSubject = 'tenant' | 'landlord' | 'property';

export interface Rating {
  id: string;
  subject: RatingSubject;
  subjectName: string;
  tenancyEndedOn?: string;
  score?: number;
}

export interface Property {
  id: string;
  address: string;
  unitLabel?: string;
  status: 'vacant' | 'occupied';
  imageUrl?: string;
}

export interface TenantSummary {
  id: string;
  name: string;
  address: string;
}

export type ApplicantStatus = 'pending' | 'approved' | 'rejected';

export interface ApplicantSummary {
  id: string;
  name: string;
  address: string;
  status: ApplicantStatus;
}


