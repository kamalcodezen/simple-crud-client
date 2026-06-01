import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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


export const updateUserData = async (formData, userId) => {
    "use server"

    const updatedUser = Object.fromEntries(formData.entries())

    // console.log("user data", updatedUser)

    const res = await fetch(`http://localhost:5000/users/${userId}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },

        body: JSON.stringify(updatedUser)

    })

    const data = await res.json()

    // console.log("after update user", data)

    if (data.modifiedCount > 0) {
        revalidatePath("/users")
        redirect("/users")
    }


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