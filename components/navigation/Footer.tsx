import Link from 'next/link'

const footerLinks = {
  tournament: [
    { name: 'About', href: '/about' },
    { name: 'Winners', href: '/winners' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'News', href: '/news' },
  ],
  participate: [
    { name: 'Register', href: '/register' },
    { name: 'Leaderboard', href: '/leaderboard' },
    { name: 'Members', href: '/members' },
  ],
  connect: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Instagram', href: '#' },
    { name: 'Facebook', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-masters-green text-white">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-serif font-bold">Tournament of Friends</h2>
            <p className="text-masters-gold text-sm mt-2">Where friendships are forged on the fairway</p>
            <p className="text-gray-300 text-sm mt-4">
              An annual gathering of golf enthusiasts competing for the prestigious Black Jacket.
            </p>
          </div>

          {/* Tournament Links */}
          <div>
            <h3 className="text-masters-gold font-semibold mb-4 uppercase tracking-wider text-sm">
              Tournament
            </h3>
            <ul className="space-y-2">
              {footerLinks.tournament.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-masters-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Participate Links */}
          <div>
            <h3 className="text-masters-gold font-semibold mb-4 uppercase tracking-wider text-sm">
              Participate
            </h3>
            <ul className="space-y-2">
              {footerLinks.participate.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-masters-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="text-masters-gold font-semibold mb-4 uppercase tracking-wider text-sm">
              Connect
            </h3>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-masters-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Tournament of Friends. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-masters-gold text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-masters-gold text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
