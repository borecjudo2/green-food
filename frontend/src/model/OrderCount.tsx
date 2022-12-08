export function addToOrderCount() {
    const item = localStorage.getItem("order_count") as string;
    let count: number = item !== null ? JSON.parse(item) as number : 0;
    ++count;
    localStorage.setItem("order_count", JSON.stringify(count))
}

export function getOrderCount():number {
    const item = localStorage.getItem("order_count") as string;
    return item !== null ? JSON.parse(item) as number : 0;
}

export function removeOneOrderCount() {
    const item = localStorage.getItem("order_count") as string;
    let count: number = item !== null ? JSON.parse(item) as number : 0;
    --count;
    localStorage.setItem("order_count", JSON.stringify(count))
}
export function removeAllOrderCount() {
   localStorage.removeItem("order_count");
}
