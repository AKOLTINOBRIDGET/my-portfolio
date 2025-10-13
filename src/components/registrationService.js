// src/API/registrationService.js

// Define API base URL outside the class
const API_BASE_URL = 'https://api-dev-jmco.onrender.com/api';

class RegistrationService {
  // Private method to handle HTTP requests
  static async _request(endpoint, options = {}) {
    // Improved URL construction - removes double slashes
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    const url = `${API_BASE_URL}/${cleanEndpoint}`;

    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'include',
    };

    const config = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    };

    try {
      console.log('Making request to:', url);
      console.log('Request config:', config);

      const response = await fetch(url, config);

      // Handle non-JSON responses
      const contentType = response.headers.get('content-type');
      let data;

      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      console.log('Response status:', response.status);
      console.log('Response data:', data);

      if (!response.ok) {
        // Extract error message or fallback
        const errorMessage =
          data?.message ||
          data?.error ||
          `Request failed with status ${response.status}`;
        throw new Error(errorMessage);
      }

      return data;
    } catch (error) {
      console.error('API request error:', error);

      if (error.message === 'Failed to fetch') {
        throw new Error('Network error. Please check your internet connection or verify the backend server is running.');
      }

      if (error.name === 'AbortError') {
        throw new Error('Request timed out. Please try again.');
      }

      throw error;
    }
  }
 
  // HTTP method helpers
  static async get(endpoint, options = {}) {
    return this._request(endpoint, {
      ...options,
      method: 'GET',
    });
  }

  static async post(endpoint, data, options = {}) {
    return this._request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  static async put(endpoint, data, options = {}) {
    return this._request(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  static async delete(endpoint, options = {}) {
    return this._request(endpoint, {
      ...options,
      method: 'DELETE',
    });
  }

  // Register a new runner
  async registerRunner(runnerData) {
    try {
      console.log('Registration payload:', runnerData);
      const response = await RegistrationService.post(
        'runners/register', // No leading slash
        runnerData
      );
      return response;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  }

  // Get runner profile
  async getRunnerProfile(runnerId) {
    try {
      return await RegistrationService.get(`runners/${runnerId}`);
    } catch (error) {
      console.error('Failed to get runner profile:', error);
      throw error;
    }
  }

  // Update runner profile
  async updateRunnerProfile(runnerId, profileData) {
    try {
      return await RegistrationService.put(`runners/${runnerId}`, profileData);
    } catch (error) {
      console.error('Failed to update runner profile:', error);
      throw error;
    }
  }

  // Process payment
  async processPayment(paymentData) {
    try {
      return await RegistrationService.post('payments', paymentData);
    } catch (error) {
      console.error('Payment processing failed:', error);
      throw error;
    }
  }

  // Get payment status
  async getPaymentStatus(paymentId) {
    try {
      return await RegistrationService.get(`payments/${paymentId}`);
    } catch (error) {
      console.error('Failed to get payment status:', error);
      throw error;
    }
  }

  // Get registration details
  async getRegistrationDetails(registrationId) {
    try {
      return await RegistrationService.get(`registrations/${registrationId}`);
    } catch (error) {
      console.error('Failed to get registration details:', error);
      throw error;
    }
  }

  // Cancel registration
  async cancelRegistration(registrationId) {
    try {
      return await RegistrationService.delete(`registrations/${registrationId}`);
    } catch (error) {
      console.error('Failed to cancel registration:', error);
      throw error;
    }
  }
}

// Export a singleton instance
export default new RegistrationService();