const BASE_URL = 'http://localhost:3000/api/v1';

export const API_ENDPOINTS = {
  DASHBOARD: {
    SOMETHING: '/dashboard/something',
  },

  LABORATORY_INVENTORY: {
    ADD: `${BASE_URL}/lab/add`,
    DELETE: `${BASE_URL}/lab/delete`,
  },

  PHARMACY_INVENTORY: {
    ADD: `${BASE_URL}/pharmacy/add`,
    DELETE: `${BASE_URL}/pharmacy/delete`,
  },
};
