# DME Directory

A comprehensive directory for Durable Medical Equipment (DME) providers across the United States. Built with Next.js, Supabase, and deployed on Vercel.

## Features

- 🔍 **Advanced Search**: Search by company name, equipment type, and location
- 📍 **Location-based Filtering**: Find providers in your area
- 🏢 **Company Profiles**: Detailed pages with contact info, services, and reviews
- ⭐ **Reviews & Ratings**: User-generated reviews for providers
- 🔐 **User Authentication**: Secure sign-up and sign-in with Supabase Auth
- 📱 **Responsive Design**: Mobile-first design with Tailwind CSS
- ✅ **Verified Providers**: Quality assurance for listed companies

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Deployment**: Vercel

## Equipment Categories

- Wheelchairs (Manual and Power)
- Hospital Beds & Accessories
- Oxygen Equipment & Concentrators
- CPAP/BiPAP Machines
- Walkers & Mobility Aids
- Bathroom Safety Equipment
- Diabetic Supplies
- Prosthetics & Orthotics
- Home Monitoring Devices
- Compression Garments

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/grocerysushi/dmedirectory.git
cd dmedirectory
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

4. Set up the database:
Run the SQL schema in `database/schema.sql` in your Supabase SQL editor.

5. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema

The application uses the following main tables:

- **companies**: Store DME provider information
- **categories**: Equipment and service categories
- **company_categories**: Many-to-many relationship between companies and categories
- **profiles**: User profiles extending Supabase auth
- **reviews**: Customer reviews and ratings

## Deployment

The application is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue on GitHub or contact us through the website.
