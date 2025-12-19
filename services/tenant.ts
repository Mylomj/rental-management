import {
    mockLease,
    mockTenantPayments,
    mockTenantRatings,
    mockTenantRequests,
} from '@/mocks/data';
import {
    Lease,
    MaintenanceRequest,
    Payment,
    Rating,
} from '@/types/models';
import { simulateNetwork } from './api';

export async function getLease(): Promise<Lease> {
  return simulateNetwork(mockLease, 400);
}

export async function getUpcomingPayments(): Promise<Payment[]> {
  const upcoming = mockTenantPayments.filter((p) => p.status === 'upcoming');
  return simulateNetwork(upcoming, 400);
}

export async function getAllPayments(): Promise<Payment[]> {
  return simulateNetwork(mockTenantPayments, 400);
}

export async function getRequests(): Promise<MaintenanceRequest[]> {
  return simulateNetwork(mockTenantRequests, 400);
}

export async function getRatings(): Promise<Rating[]> {
  return simulateNetwork(mockTenantRatings, 400);
}


