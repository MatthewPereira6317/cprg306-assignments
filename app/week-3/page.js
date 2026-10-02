import Link from 'next/link';
export default function Page() {
    const dog1 = {
        name: "Max",
        age: 2,
        breed: "Golden Retriever",
        color: "Golden"
    }
    const dog2 = {
        name: "Max",
        age: 3,
        breed: "German Shepherd",
        color: "Black and Brown"
    }
    return (
        <main>
            <h1 className="text-4xl text-red-500">Week 3 - Component</h1>
            <h2 className="text-3xl text-blue-060">Dogs Information</h2>
            <section className="bg-slate-300 w-1/4">
                <h2 className="font-bold">{dog1.name}</h2>
                <p>Age: {dog1.age}</p>
                <p>Breed: {dog1.breed}</p>
                <p>Color: {dog1.color}</p>
            </section>
            <section className="bg-slate-300 w-1/4">
                <h2 className="font-bold">{dog2.name}</h2>
                <p>Age: {dog2.age}</p>
                <p>Breed: {dog2.breed}</p>
                <p>Color: {dog2.color}</p>
            </section>
        </main>
    )
}