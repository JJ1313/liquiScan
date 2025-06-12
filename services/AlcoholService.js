import axios from 'axios';

const API_URL = 'http://localhost:8000/api/alcohol/'; // Cambia la IP por la de tu servidor Django

export const fetchAlcoholes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching alcoholes:", error);
    throw error;
  }
};

export const createAlcohol = async (alcoholData) => {
  try {
    const response = await axios.post(API_URL, alcoholData);
    return response.data;
  } catch (error) {
    console.error("Error creating alcohol:", error);
    throw error;
  }
};

export const updateAlcohol = async (id, alcoholData) => {
  try {
    const response = await axios.put(`${API_URL}${id}/`, alcoholData);
    return response.data;
  } catch (error) {
    console.error("Error updating alcohol:", error);
    throw error;
  }
};

export const deleteAlcohol = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error deleting alcohol:", error);
    throw error;
  }
};

export const addItemToSelected = async (item, selectedList, setSelected) => {
    try {
        const exists = selectedList.some(drink => drink.id === item.id);
        let newSelected;
        
        if (!exists) {
            newSelected = [...selectedList, item];
            await axios.post(`${API_URL}${item.id}/select/`);
        } else {
            newSelected = selectedList.filter(drink => drink.id !== item.id);
            await axios.delete(`${API_URL}${item.id}/select/`);
        }
        
        setSelected(newSelected);
    } catch (error) {
        console.error("Error updating selection:", error);
    }
};