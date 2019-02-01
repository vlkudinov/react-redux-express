import axios from "axios";

const rootURL = process.env.ROOT_URL || 'http://localhost:3001/';

export async function fetchTickets() {
  try {
    const req = await axios(rootURL + 'tickets');
    return await new Promise((resolve) => setTimeout(() => resolve(req.data), 1000));
    
  } catch (e) {
    throw e;
  }
}