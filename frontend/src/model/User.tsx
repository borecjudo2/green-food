export interface User {
    id: string,
    username: string,
    iconUrl: string
}

export const existingUser: User = {
    id: "7b85e48e-9d30-4744-99e8-ab11b422edcf",
    username: "Vlad Kar",
    iconUrl: "https://i.pinimg.com/originals/89/90/48/899048ab0cc455154006fdb9676964b3.jpg"
}

export function saveUser() {
    localStorage.setItem("user", JSON.stringify(existingUser))
}

export function getUser(): User|null {
    const item = localStorage.getItem("user");
    return item !== null ? JSON.parse(item) as User : null;
}

export function isUser(): boolean {
    const item = localStorage.getItem("user");
    return item !== null;
}

export function removeUser() {
    localStorage.removeItem("user");
}
