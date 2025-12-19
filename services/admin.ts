import {
    mockAdminApplicants,
    mockAdminProperties,
    mockAdminSummary,
    mockAdminTenants,
    mockRecentActivity,
} from '@/mocks/data';
import {
    ActivityItem,
    ApplicantSummary,
    DashboardSummary,
    Property,
    TenantSummary,
} from '@/types/models';
import { simulateNetwork } from './api';

export async function getDashboardSummary(): Promise<DashboardSummary> {
  return simulateNetwork(mockAdminSummary, 500);
}

export async function getRecentActivity(): Promise<ActivityItem[]> {
  return simulateNetwork(mockRecentActivity, 500);
}

export async function getProperties(): Promise<Property[]> {
  return simulateNetwork(mockAdminProperties, 400);
}

export async function getTenants(): Promise<TenantSummary[]> {
  return simulateNetwork(mockAdminTenants, 400);
}

export async function getApplicants(): Promise<ApplicantSummary[]> {
  return simulateNetwork(mockAdminApplicants, 400);
}


