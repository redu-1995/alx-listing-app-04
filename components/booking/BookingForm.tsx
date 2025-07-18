const BookingForm = () => (
  <div className="bg-white p-8 shadow-xl rounded-xl max-w-3xl mx-auto">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Detail</h2>
    <form className="space-y-6">
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" className="mt-2 border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-green-400 focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" className="mt-2 border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-green-400 focus:outline-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="mt-2 border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-green-400 focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="text" className="mt-2 border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-green-400 focus:outline-none" />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-2xl font-bold text-gray-800 mt-8">Pay with</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Card Number</label>
        <input type="text" className="mt-2 border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-green-400 focus:outline-none" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Expiration Date</label>
          <input type="text" className="mt-2 border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-green-400 focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">CVV</label>
          <input type="text" className="mt-2 border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-green-400 focus:outline-none" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-2xl font-bold text-gray-800 mt-8">Billing Address</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Street Address</label>
        <input type="text" className="mt-2 border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-green-400 focus:outline-none" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input type="text" className="mt-2 border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-green-400 focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">State</label>
          <input type="text" className="mt-2 border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-green-400 focus:outline-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Zip Code</label>
          <input type="text" className="mt-2 border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-green-400 focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input type="text" className="mt-2 border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-green-400 focus:outline-none" />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition duration-200"
      >
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;
