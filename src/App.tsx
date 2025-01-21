import { Calculator } from "./Calculator";

export function App() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-lg'>
        <h1 className="text-2xl font-bold mb-4">電卓アプリ</h1>
      </div>
      <Calculator />
    </div>
  )
}
