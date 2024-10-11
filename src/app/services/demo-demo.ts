import { Customer } from '../models/DemoDemo/customer';
import { CustomerOrdersResult } from '../models/DemoDemo/customer-orders-result';
import { FetchApi } from './fetch-api';

const API_ENDPOINT = 'https://northwindcloud.azurewebsites.net';

export async function getCustomerList(): Promise<Customer[]> {
  return await FetchApi.fetchApiResponse<Customer[]>(`${API_ENDPOINT}/api/customers`, []);
}

export async function getCustomerOrdersResultList(customerId: string): Promise<CustomerOrdersResult[]> {
  if (!customerId) {
    return Promise.resolve([]);
  }
  return await FetchApi.fetchApiResponse<CustomerOrdersResult[]>(`${API_ENDPOINT}/api/customer_orders/${customerId}`, []);
}
