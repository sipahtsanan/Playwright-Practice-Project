import { generateShortUUID } from '../../utils/helper.ts';

export const registerUser = {
  name: 'Playwright User',
//   email: `pw_${Date.now()}@test.com`,
  email: `qa_${generateShortUUID()}@test.com`,
  email_notexist: `qa_${generateShortUUID()}@test.com`,
  password: '123456',
  firstName: 'Playwright',
  lastName: 'Tester',
  company: 'QA comp',
  address: 'Bangkok',
  country: 'Australia',
  state: 'BKK',
  city: 'Bangkok',
  zipcode: '10110',
  mobile: '0123456789',
  register_url: 'https://automationexercise.com'  
};

