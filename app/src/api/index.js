import axios from "axios";

const API_URL = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3001/';

export async function fetchTickets() {
  try {
    const req = await axios(API_URL + 'tickets');
    return await new Promise((resolve) => setTimeout(() => resolve(req.data), 1000));
    
  } catch (e) {
    throw e;
  }
}