import { Booking, Coupon, Hotel, Room, Transaction, User } from "./types";

// Mock Users
export const mockUsers: User[] = [
  {
    id: "usr_001",
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "super_admin",
    avatar: "https://i.pravatar.cc/150?img=1",
    createdAt: new Date("2023-01-15"),
    status: "active",
  },
  {
    id: "usr_002",
    name: "Samantha Williams",
    email: "sam@hotelgrand.com",
    role: "hotel_admin",
    avatar: "https://i.pravatar.cc/150?img=5",
    createdAt: new Date("2023-02-21"),
    status: "active",
  },
  {
    id: "usr_003",
    name: "Michael Chen",
    email: "michael@seasideresort.com",
    role: "hotel_admin",
    avatar: "https://i.pravatar.cc/150?img=3",
    createdAt: new Date("2023-03-05"),
    status: "active",
  },
  {
    id: "usr_004",
    name: "Emily Rodriguez",
    email: "emily@example.com",
    role: "staff",
    avatar: "https://i.pravatar.cc/150?img=10",
    createdAt: new Date("2023-04-12"),
    status: "active",
  },
  {
    id: "usr_005",
    name: "David Kim",
    email: "david@example.com",
    role: "customer",
    avatar: "https://i.pravatar.cc/150?img=6",
    createdAt: new Date("2023-05-18"),
    status: "active",
  },
  {
    id: "usr_006",
    name: "Jessica Martinez",
    email: "jessica@example.com",
    role: "customer",
    avatar: "https://i.pravatar.cc/150?img=4",
    createdAt: new Date("2023-06-22"),
    status: "inactive",
  },
];

// Mock Hotels
export const mockHotels: Hotel[] = [
  {
    id: "htl_001",
    name: "Grand Plaza Hotel",
    description:
      "A luxurious 5-star hotel in the heart of downtown with stunning city views.",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    country: "USA",
    zipCode: "10001",
    rating: 4.8,
    images: [
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    amenities: ["WiFi", "Pool", "Spa", "Gym", "Restaurant"],
    status: "active",
    ownerId: "usr_002",
    createdAt: new Date("2023-01-10"),
  },
  {
    id: "htl_002",
    name: "Seaside Resort",
    description:
      "A beautiful beachfront resort with private access to crystal clear waters.",
    address: "456 Ocean Drive",
    city: "Miami",
    state: "FL",
    country: "USA",
    zipCode: "33139",
    rating: 4.6,
    images: [
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    amenities: ["WiFi", "Beach Access", "Spa", "Pool", "Restaurant", "Bar"],
    status: "active",
    ownerId: "usr_003",
    createdAt: new Date("2023-02-15"),
  },
  {
    id: "htl_003",
    name: "Mountain View Lodge",
    description:
      "A cozy mountain retreat perfect for nature lovers and adventure seekers.",
    address: "789 Pine Road",
    city: "Aspen",
    state: "CO",
    country: "USA",
    zipCode: "81611",
    rating: 4.5,
    images: [
      "https://images.pexels.com/photos/5379219/pexels-photo-5379219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    amenities: ["WiFi", "Fireplace", "Hiking Trails", "Restaurant", "Bar"],
    status: "active",
    ownerId: "usr_003",
    createdAt: new Date("2023-03-05"),
  },
];

// Mock Rooms
export const mockRooms: Room[] = [
  {
    id: "rm_001",
    hotelId: "htl_001",
    name: "Deluxe King Suite",
    description: "Spacious suite with a king-sized bed and city views.",
    type: "Suite",
    capacity: 2,
    price: 350,
    discount: 0,
    images: [
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    amenities: ["King Bed", "Mini Bar", "WiFi", "TV", "Air Conditioning"],
    status: "available",
  },
  {
    id: "rm_002",
    hotelId: "htl_001",
    name: "Double Queen Room",
    description: "Comfortable room with two queen-sized beds.",
    type: "Standard",
    capacity: 4,
    price: 250,
    discount: 10,
    images: [
      "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    amenities: ["Queen Beds", "WiFi", "TV", "Air Conditioning"],
    status: "available",
  },
  {
    id: "rm_003",
    hotelId: "htl_002",
    name: "Oceanfront Suite",
    description: "Luxury suite with panoramic ocean views.",
    type: "Suite",
    capacity: 2,
    price: 450,
    discount: 0,
    images: [
      "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    amenities: [
      "King Bed",
      "Balcony",
      "Mini Bar",
      "WiFi",
      "TV",
      "Air Conditioning",
    ],
    status: "booked",
  },
];

// Mock Bookings
export const mockBookings: Booking[] = [
  {
    id: "bkg_001",
    userId: "usr_005",
    userName: "David Kim",
    hotelId: "htl_001",
    hotelName: "Grand Plaza Hotel",
    roomId: "rm_001",
    roomName: "Deluxe King Suite",
    checkIn: new Date("2023-07-15"),
    checkOut: new Date("2023-07-18"),
    guests: 2,
    totalAmount: 1050,
    status: "confirmed",
    paymentStatus: "paid",
    createdAt: new Date("2023-06-20"),
  },
  {
    id: "bkg_002",
    userId: "usr_006",
    userName: "Jessica Martinez",
    hotelId: "htl_002",
    hotelName: "Seaside Resort",
    roomId: "rm_003",
    roomName: "Oceanfront Suite",
    checkIn: new Date("2023-08-01"),
    checkOut: new Date("2023-08-05"),
    guests: 2,
    totalAmount: 1800,
    status: "pending",
    paymentStatus: "pending",
    createdAt: new Date("2023-07-15"),
  },
  {
    id: "bkg_003",
    userId: "usr_005",
    userName: "David Kim",
    hotelId: "htl_003",
    hotelName: "Mountain View Lodge",
    roomId: "rm_004",
    roomName: "Mountain Cabin",
    checkIn: new Date("2023-09-10"),
    checkOut: new Date("2023-09-15"),
    guests: 3,
    totalAmount: 1200,
    status: "cancelled",
    paymentStatus: "refunded",
    createdAt: new Date("2023-08-01"),
  },
];

// Mock Transactions
export const mockTransactions: Transaction[] = [
  {
    id: "txn_001",
    bookingId: "bkg_001",
    userId: "usr_005",
    amount: 1050,
    currency: "INR",
    status: "successful",
    paymentMethod: "Credit Card",
    transactionDate: new Date("2023-06-20"),
  },
  {
    id: "txn_002",
    bookingId: "bkg_003",
    userId: "usr_005",
    amount: 1200,
    currency: "INR",
    status: "refunded",
    paymentMethod: "Credit Card",
    transactionDate: new Date("2023-08-05"),
  },
];

// Mock Coupons
export const mockCoupons: Coupon[] = [
  {
    id: "cpn_001",
    code: "SUMMER25",
    description: "25% off summer bookings",
    discountType: "percentage",
    discountValue: 25,
    minPurchase: 200,
    maxDiscount: 300,
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-08-31"),
    usageLimit: 100,
    usedCount: 45,
    status: "active",
  },
  {
    id: "cpn_002",
    code: "WELCOME50",
    description: "$50 off your first booking",
    discountType: "fixed",
    discountValue: 50,
    minPurchase: 150,
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-12-31"),
    usageLimit: 500,
    usedCount: 320,
    status: "active",
  },
  {
    id: "cpn_003",
    code: "FLASH15",
    description: "15% off weekend flash sale",
    discountType: "percentage",
    discountValue: 15,
    maxDiscount: 100,
    startDate: new Date("2023-07-15"),
    endDate: new Date("2023-07-17"),
    usageLimit: 200,
    usedCount: 200,
    status: "expired",
  },
];

// Mock Analytics Data
export const mockAnalytics = {
  bookings: {
    totalBookings: 183,
    confirmedBookings: 145,
    pendingBookings: 25,
    cancelledBookings: 13,
    monthlyData: [
      { month: "Jan", count: 12 },
      { month: "Feb", count: 15 },
      { month: "Mar", count: 18 },
      { month: "Apr", count: 22 },
      { month: "May", count: 26 },
      { month: "Jun", count: 30 },
      { month: "Jul", count: 34 },
      { month: "Aug", count: 26 },
    ],
  },
  revenue: {
    totalRevenue: 87250,
    pendingRevenue: 12800,
    refundedAmount: 5200,
    monthlyData: [
      { month: "Jan", amount: 6500 },
      { month: "Feb", amount: 7200 },
      { month: "Mar", amount: 8500 },
      { month: "Apr", amount: 9800 },
      { month: "May", amount: 11200 },
      { month: "Jun", amount: 13500 },
      { month: "Jul", amount: 15800 },
      { month: "Aug", amount: 14750 },
    ],
  },
  users: {
    totalUsers: 542,
    newUsers: 38,
    activeUsers: 485,
    inactiveUsers: 57,
  },
  rooms: {
    totalRooms: 120,
    availableRooms: 82,
    bookedRooms: 35,
    maintenanceRooms: 3,
  },
};

// Mock invoices data
export const mockInvoices = [
  {
    id: "INV-001",
    bookingId: "bkg_001",
    userId: "usr_005",
    userName: "David Kim",
    hotelId: "htl_001",
    hotelName: "Grand Plaza Hotel",
    amount: 1000,
    tax: 50,
    totalAmount: 1050,
    status: "paid",
    dueDate: new Date("2023-07-20"),
    paidDate: new Date("2023-07-18"),
    createdAt: new Date("2023-06-20"),
  },
  {
    id: "INV-002",
    bookingId: "bkg_002",
    userId: "usr_006",
    userName: "Jessica Martinez",
    hotelId: "htl_002",
    hotelName: "Seaside Resort",
    amount: 1700,
    tax: 100,
    totalAmount: 1800,
    status: "pending",
    dueDate: new Date("2023-08-05"),
    createdAt: new Date("2023-07-15"),
  },
  {
    id: "INV-003",
    bookingId: "bkg_003",
    userId: "usr_005",
    userName: "David Kim",
    hotelId: "htl_003",
    hotelName: "Mountain View Lodge",
    amount: 1100,
    tax: 100,
    totalAmount: 1200,
    status: "overdue",
    dueDate: new Date("2023-09-20"),
    createdAt: new Date("2023-08-01"),
  },
];

// Mock payments data
export const mockPayments = [
  {
    id: "txn_001",
    bookingId: "bkg_001",
    userId: "usr_005",
    userName: "David Kim",
    amount: 1050,
    currency: "INR",
    status: "successful",
    paymentMethod: "Credit Card",
    transactionDate: new Date("2023-06-20"),
  },
  {
    id: "txn_002",
    bookingId: "bkg_002",
    userId: "usr_006",
    userName: "Jessica Martinez",
    amount: 1800,
    currency: "INR",
    status: "pending",
    paymentMethod: "Bank Transfer",
    transactionDate: new Date("2023-07-15"),
  },
  {
    id: "txn_003",
    bookingId: "bkg_003",
    userId: "usr_005",
    userName: "David Kim",
    amount: 1200,
    currency: "INR",
    status: "refunded",
    paymentMethod: "Credit Card",
    transactionDate: new Date("2023-08-05"),
  },
];

// // Mock rooms data
// export const mockRooms = [
//   {
//     id: "rm_001",
//     hotelId: "htl_001",
//     roomNumber: "101",
//     name: "Deluxe King Room",
//     type: "deluxe",
//     description: "Spacious deluxe room with king-sized bed and city view",
//     capacity: 2,
//     bedType: "King",
//     size: 350, // sq ft
//     pricePerNight: 250,
//     pricePerHour: 35,
//     isHourlyBooking: true,
//     isDailyBooking: true,
//     amenities: ["free_wifi", "ac_heating", "tv", "minibar", "safe"],
//     images: [
//       "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
//       "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
//     ],
//     status: "available", // available, occupied, maintenance, out_of_order
//     floor: 1,
//     createdAt: new Date("2023-01-15"),
//     updatedAt: new Date("2023-06-20"),
//   },
//   {
//     id: "rm_002",
//     hotelId: "htl_001",
//     roomNumber: "102",
//     name: "Standard Twin Room",
//     type: "standard",
//     description: "Comfortable standard room with twin beds",
//     capacity: 2,
//     bedType: "Twin",
//     size: 280,
//     pricePerNight: 180,
//     pricePerHour: 25,
//     isHourlyBooking: true,
//     isDailyBooking: true,
//     amenities: ["free_wifi", "ac_heating", "tv"],
//     images: [
//       "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg",
//     ],
//     status: "occupied",
//     floor: 1,
//     createdAt: new Date("2023-01-15"),
//     updatedAt: new Date("2023-06-20"),
//   },
//   {
//     id: "rm_003",
//     hotelId: "htl_001",
//     roomNumber: "201",
//     name: "Executive Suite",
//     type: "suite",
//     description: "Luxurious suite with separate living area and premium amenities",
//     capacity: 4,
//     bedType: "King + Sofa Bed",
//     size: 600,
//     pricePerNight: 450,
//     pricePerHour: 65,
//     isHourlyBooking: false,
//     isDailyBooking: true,
//     amenities: ["free_wifi", "ac_heating", "tv", "minibar", "safe", "balcony", "bathrobe"],
//     images: [
//       "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg",
//     ],
//     status: "maintenance",
//     floor: 2,
//     createdAt: new Date("2023-01-15"),
//     updatedAt: new Date("2023-06-20"),
//   },
//   {
//     id: "rm_004",
//     hotelId: "htl_002",
//     roomNumber: "301",
//     name: "Ocean View Suite",
//     type: "suite",
//     description: "Premium suite with stunning ocean views and private balcony",
//     capacity: 3,
//     bedType: "King",
//     size: 550,
//     pricePerNight: 380,
//     pricePerHour: 55,
//     isHourlyBooking: true,
//     isDailyBooking: true,
//     amenities: ["free_wifi", "ac_heating", "tv", "minibar", "safe", "balcony", "spa"],
//     images: [
//       "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg",
//     ],
//     status: "available",
//     floor: 3,
//     createdAt: new Date("2023-02-20"),
//     updatedAt: new Date("2023-06-25"),
//   },
// ];