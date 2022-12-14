import { useEffect, useState } from 'react';

const useInventoryItem = (InventoryId) => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        const url = `https://warehouse-management-app.onrender.com/inventory/${InventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [InventoryId])
    return [inventory];
};

export default useInventoryItem;