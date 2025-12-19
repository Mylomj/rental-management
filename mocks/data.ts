import {
    ActivityItem,
    ApplicantSummary,
    DashboardSummary,
    Lease,
    MaintenanceRequest,
    Payment,
    Property,
    Rating,
    TenantSummary,
    User,
} from '@/types/models';

export const mockAdminUser: User = {
  id: 'admin-1',
  name: 'Milton (Admin)',
  email: 'milton@gmail.com',
  role: 'admin',
  photoUrl: null,
};

export const mockTenantUser: User = {
  id: 'tenant-1',
  name: 'Tenant User',
  email: 'tenant@example.com',
  role: 'tenant',
  photoUrl: null,
};

export const mockAdminSummary: DashboardSummary = {
  totalProperties: 5,
  occupiedUnits: 0,
  pendingApplications: 0,
  totalRentCollected: 0,
  outstandingBalance: 0,
};

export const mockAdminProperties: Property[] = [
  {
    id: 'prop-1',
    address: '123 Main St',
    unitLabel: 'Apt 2B',
    status: 'vacant',
    imageUrl:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop',
  },
  {
    id: 'prop-2',
    address: '456 Oak Ave',
    unitLabel: 'House',
    status: 'vacant',
    imageUrl:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=200&fit=crop',
  },
  {
    id: 'prop-3',
    address: '789 Pine Ln',
    unitLabel: 'Condo',
    status: 'vacant',
    imageUrl:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=200&fit=crop',
  },
  {
    id: 'prop-4',
    address: '101 Elm Rd',
    unitLabel: 'Duplex',
    status: 'vacant',
    imageUrl:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=300&h=200&fit=crop',
  },
  {
    id: 'prop-5',
    address: '222 Maple Dr',
    unitLabel: 'House',
    status: 'vacant',
    imageUrl:
      'https://images.unsplash.com/photo-1570129476761-ff57a58e193c?w=300&h=200&fit=crop',
  },
];

export const mockAdminTenants: TenantSummary[] = [];

export const mockAdminApplicants: ApplicantSummary[] = [];

export const mockRecentActivity: ActivityItem[] = [];

export const mockLease: Lease = {
  id: 'lease-1',
  propertyAddress: '456 Oak Ave',
  unit: 'Apt 2A',
  startDate: '2023-08-15',
  endDate: '2024-08-14',
  rentAmount: 1500,
  landlordName: 'Acme Properties',
};

export const mockTenantPayments: Payment[] = [
  {
    id: 'pay-1',
    label: 'July Rent',
    dueDate: '2024-07-01',
    amount: 1500,
    status: 'upcoming',
  },
];

export const mockTenantRequests: MaintenanceRequest[] = [
  {
    id: 'req-1',
    title: 'Leaky Faucet',
    createdAt: '2024-06-10',
    status: 'open',
  },
];

export const mockTenantRatings: Rating[] = [
  {
    id: 'rating-1',
    subject: 'landlord',
    subjectName: 'Ethan Harper',
    tenancyEndedOn: '2024-01-15',
  },
];


