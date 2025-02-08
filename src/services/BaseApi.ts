const API_URL = "https://lexisnap-server-v2.onrender.com/api/v2";
const AUTH_TOKEN = localStorage.getItem('accessToken'); 

export async function addEntity(data ,entityName) {
    try {
        const response = await fetch(`${API_URL}/${entityName}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${AUTH_TOKEN}`,
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                const data = await response.json();
                return data.data; 
            } else if (contentType && contentType.includes("text/plain")) {
                const data = await response.text();
                return data.split("/").pop();
            }
        } else {
            const errorText = await response.text();
            throw new Error(`Error adding word: ${errorText}`);
        }
    } catch (error) {
        console.error("Error adding word:", error);
        throw error;
    }
}

export async function getEntities(entityName) {
    console.log(`${API_URL}/${entityName}`);
try {
    const res = await fetch(`${API_URL}/${entityName}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${AUTH_TOKEN}`,
        },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch ${entityName}`);
    }

    const data = await res.json();

    return data;
} catch (error) {
    console.error(`Error fetching ${entityName}:`, error);
    throw error;
}
}

export async function getEntity(entityName) {
    console.log(`${API_URL}/${entityName}`);
try {
    const res = await fetch(`${API_URL}/${entityName}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${AUTH_TOKEN}`,
        },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch ${entityName}`);
    }

    const data = await res.json();

    return data.data;
} catch (error) {
    console.error(`Error fetching ${entityName}:`, error);
    throw error;
}

}

export async function updateEntity(entityName ,data) {
    console.log(`${API_URL}/${entityName}`);
try {
    const res = await fetch(`${API_URL}/${entityName}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${AUTH_TOKEN}`,
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch ${entityName}`);
    }

    const result = await res.json();

    return result.data;
} catch (error) {
    console.error(`Error fetching ${entityName}:`, error);
    throw error;
}
}

//https://lexisnap-server-v2.onrender.com/api/v2/search?query=oopp&page=1
export async function search(query page) {
    console.log(`${API_URL}/search?query=${query}&page=${page}`);
try {
    const res = await fetch(`${API_URL}/search?query=${query}&page=${page}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${AUTH_TOKEN}`,
        },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch search with this query: ${query}`);
    }

    const data = await res.json();

    return data.relatedWords;
} catch (error) {
    console.error(`Error fetching this query: ${query}:`, error);
    throw error;
}
}