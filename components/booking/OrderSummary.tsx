import { BookingDetails } from '../../interfaces';

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => (
  <div className="bg-white p-8 shadow-xl rounded-xl max-w-xl mx-auto">
    <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">Review Order Details</h2>

    <div className="flex items-center mt-6">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
        alt="Property"
        className="w-28 h-28 object-cover rounded-lg shadow-sm border"
       />

      <div className="ml-6">
        <h3 className="text-lg font-semibold text-gray-900">{bookingDetails.propertyName}</h3>
        <p className="text-sm text-gray-500 mt-1">4.76 (345 reviews)</p>
        <p className="text-sm text-gray-500 mt-1">
          {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
        </p>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-8 space-y-3 text-gray-700">
      <div className="flex justify-between">
        <p className="font-medium">Booking Fee</p>
        <p className="font-medium">${bookingDetails.bookingFee}</p>
      </div>
      <div className="flex justify-between">
        <p className="font-medium">Subtotal</p>
        <p className="font-medium">${bookingDetails.price}</p>
      </div>
      <div className="flex justify-between pt-4 mt-2 border-t font-bold text-gray-900 text-lg">
        <p>Grand Total</p>
        <p>${bookingDetails.bookingFee + bookingDetails.price}</p>
      </div>
    </div>
  </div>
);

export default OrderSummary;
