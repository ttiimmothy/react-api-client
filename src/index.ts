export const callApi = async (endpoint: string) => { 
  const axios = (await import('axios')).default; 
  try { 
    const response = await axios.get(endpoint); 
    return response.data; 
  } catch (error) { 
    console.error('Error calling API:', error); 
    throw error; 
  } 
}
