import { ConvertToUTC, GetToday } from '@/lib/moment';
import * as FileSystem from 'expo-file-system';
import { ToastAndroid } from 'react-native';

// Define the file path
const fileUri = `${FileSystem.documentDirectory}customer.json`;

type customerDataType = {
  firstName: string;
  lastName: string;
  email: string;
  description: string;
};

// Function to read the existing customers
export const readCustomers = async (customerId: string = '') => {
  try {
    const fileInfo = await FileSystem.getInfoAsync(fileUri);
    if (!fileInfo.exists) {
      return [];
    }

    const content = await FileSystem.readAsStringAsync(fileUri);
    const customers = JSON.parse(content);
    const sortedCustomer = customers.sort(
      (a: any, b: any) => new Date(b?.created_at).getTime() - new Date(a?.created_at).getTime()
    );
    if (customerId?.length) {
      return sortedCustomer?.find((item: any) => item?.id === customerId);
    } else {
      return sortedCustomer;
    }
  } catch (error) {
    console.error('Error reading customer data:', error);
    return [];
  }
};

// Function to create a new customer
export const createCustomer = async (customer: customerDataType): Promise<boolean> => {
  try {
    const customers = await readCustomers();

    const isDuplicate = customers.some(
      (c: customerDataType) => c.email.toLowerCase() === customer.email.toLowerCase()
    );
    if (isDuplicate) {
      ToastAndroid.show('Customer is already existing!', ToastAndroid.SHORT);
      return false;
    }

    const getCurrentUtc = ConvertToUTC(GetToday(), 'UTC');

    customers.push({
      id: `${getCurrentUtc}${customers?.length + 1}`,
      created_at: new Date().toISOString(),
      ...customer,
    });

    await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(customers, null, 2), {
      encoding: FileSystem.EncodingType.UTF8,
    });

    ToastAndroid.show('Customer save successfully', ToastAndroid.SHORT);
    return true;
  } catch (error) {
    console.error('Error saving customer data:', error);
    return false;
  }
};

export const updateCustomer = async (
  id: number,
  updatedData: Partial<customerDataType>
): Promise<boolean> => {
  try {
    let customers = await readCustomers();

    // Find the index of the customer
    const index = customers.findIndex((customer: any) => customer.id === id);
    if (index === -1) {
      ToastAndroid.show('Sorry! Customer not found!', ToastAndroid.SHORT);
      return false;
    }

    // Update customer data (keep previous values if not provided in `updatedData`)
    customers[index] = {
      ...customers[index],
      ...updatedData,
      updated_at: new Date().toISOString(),
    };

    // Write updated data to the file
    await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(customers, null, 2), {
      encoding: FileSystem.EncodingType.UTF8,
    });

    ToastAndroid.show('Customer update successfully!', ToastAndroid.SHORT);
    return true;
  } catch (error) {
    console.error('Error updating customer data:', error);
    return false;
  }
};

export const deleteCustomer = async (id: number | string): Promise<boolean> => {
  try {
    let customers = await readCustomers();

    // Filter out the customer with the given ID
    const filteredCustomers = customers.filter((customer: any) => customer.id !== id);
    if (filteredCustomers.length === customers.length) {
      ToastAndroid.show('Sorry! Customer not found!', ToastAndroid.SHORT);
      return false;
    }

    // Write the updated list to the file
    await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(filteredCustomers, null, 2), {
      encoding: FileSystem.EncodingType.UTF8,
    });

    ToastAndroid.show('Customer delete successfully!', ToastAndroid.SHORT);
    return true;
  } catch (error) {
    console.error('Error deleting customer data:', error);
    return false;
  }
};

// Function to clear customer data
export const clearCustomers = async (): Promise<boolean> => {
  try {
    await FileSystem.writeAsStringAsync(fileUri, JSON.stringify([], null, 2), {
      encoding: FileSystem.EncodingType.UTF8,
    });

    return true;
  } catch (error) {
    console.error('Error clearing customer data:', error);
    return false;
  }
};
