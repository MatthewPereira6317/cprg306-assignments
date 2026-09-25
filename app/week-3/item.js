export default function Item({ name, category, quantity }) {
    return (
        <li className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div>
                <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
                <p className="text-sm text-gray-600">Category: {category}</p>
                <p className="text-sm bg-blue-100 px-3 py-1 font-medium">Quantity: {quantity}</p>
            </div>
        </li>
    );
}