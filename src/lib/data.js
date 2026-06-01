"use server"

export const getUsersData = async () => {
    const res = await fetch("http://localhost:5000/users")
    const data = await res.json()
    return data;

}


export const getSingleUserById = async (userId) => {
    const res = await fetch(`http://localhost:5000/users/${userId}`)
    const data = await res.json()
    return data;
}