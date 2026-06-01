import { revalidatePath } from "next/cache";

export const deleteUserData = async (userId) => {
    "use server"

    const res = await fetch(`http://localhost:5000/users/${userId}`, {
        method: "DELETE",
    });

    const data = await res.json()

    // console.log("after delete data", data)
    if (data.deletedCount > 0) {
        revalidatePath("/users")
    }

    return data;

}


export const addUserdata = async (formData) => {
    "use server"

    const newUser = Object.fromEntries(formData.entries())

    // console.log("new user data", newUser)

    const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },

        body: JSON.stringify(newUser)
    })

    const data = await res.json()

    if (data.insertedId) {
        revalidatePath("/users")
    }

    // console.log("data after post", data)

    return data
}