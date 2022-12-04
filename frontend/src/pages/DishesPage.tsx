import {Dish, IDish} from "../components/Dish";

export function DishesPage() {

    const dishes: IDish[] = [
        {
            name: "Cesar",
            iconUrl: "https://images.squarespace-cdn.com/content/v1/5f45e8a57835a20bff5deabf/cd0e60e5-0e96-4e55-aa85-11739994e464/1.jpg",
            type: "Salad",
            description: "Cesarssss Saladsss",
            price: 35.2
        },
        {
            name: "Cesar",
            iconUrl: "https://images.squarespace-cdn.com/content/v1/5f45e8a57835a20bff5deabf/cd0e60e5-0e96-4e55-aa85-11739994e464/1.jpg",
            type: "Salad",
            description: "Cesarssss Saladsss",
            price: 35.0
        },
        {
            name: "Cesar",
            iconUrl: "https://images.squarespace-cdn.com/content/v1/5f45e8a57835a20bff5deabf/cd0e60e5-0e96-4e55-aa85-11739994e464/1.jpg",
            type: "Salad",
            description: "Cesarssss Saladsss",
            price: 35.2
        },
        {
            name: "Cesar",
            iconUrl: "https://images.squarespace-cdn.com/content/v1/5f45e8a57835a20bff5deabf/cd0e60e5-0e96-4e55-aa85-11739994e464/1.jpg",
            type: "Salad",
            description: "Cesarssss Saladsss",
            price: 35.2
        },
        {
            name: "Cesar",
            iconUrl: "https://images.squarespace-cdn.com/content/v1/5f45e8a57835a20bff5deabf/cd0e60e5-0e96-4e55-aa85-11739994e464/1.jpg",
            type: "Salad",
            description: "Cesarssss Saladsss",
            price: 35.2
        },
        {
            name: "Cesar",
            iconUrl: "https://images.squarespace-cdn.com/content/v1/5f45e8a57835a20bff5deabf/cd0e60e5-0e96-4e55-aa85-11739994e464/1.jpg",
            type: "Salad",
            description: "Cesarssss Saladsss",
            price: 35.0
        },
        {
            name: "Cesar",
            iconUrl: "https://images.squarespace-cdn.com/content/v1/5f45e8a57835a20bff5deabf/cd0e60e5-0e96-4e55-aa85-11739994e464/1.jpg",
            type: "Salad",
            description: "Cesarssss Saladsss",
            price: 35.2
        },
        {
            name: "Cesar",
            iconUrl: "https://images.squarespace-cdn.com/content/v1/5f45e8a57835a20bff5deabf/cd0e60e5-0e96-4e55-aa85-11739994e464/1.jpg",
            type: "Salad",
            description: "Cesarssss Saladsss",
            price: 35.2
        }
    ]

    return (
        <div className="grid grid-cols-4 gap-20 m-20">
            {dishes.map(dish =>
                <Dish dish={dish}/>
            )}
        </div>

    )
}