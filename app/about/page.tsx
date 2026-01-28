import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Tournament of Friends',
  description: 'Learn about the Tournament of Friends, our founders, and the tradition of the Black Jacket.',
}

const founders = [
  {
    name: 'Founder 1',
    role: 'Co-Founder',
    bio: 'A passionate golfer and visionary who helped establish the Tournament of Friends.',
  },
  {
    name: 'Founder 2',
    role: 'Co-Founder',
    bio: 'Instrumental in creating the traditions and camaraderie that define our tournament.',
  },
  {
    name: 'Founder 3',
    role: 'Co-Founder',
    bio: 'The driving force behind making the Tournament of Friends a premier annual event.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-masters-green text-white py-20">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            About Tournament of Friends
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            A tradition of friendship, competition, and the pursuit of the Black Jacket
          </p>
        </div>
      </section>

      {/* History */}
      <section className="section-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-masters-dark mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                The Tournament of Friends began in 2015 as a simple gathering of golf enthusiasts who shared a love for the game and a deep appreciation for the friendships it fosters. What started as an informal competition among friends has grown into an annual tradition that participants look forward to all year.
              </p>
              <p className="mb-6">
                Inspired by golf&apos;s most prestigious tournaments, we created our own symbol of excellence: the Black Jacket. This coveted prize represents not just golfing prowess, but the values of sportsmanship, camaraderie, and the bonds that make this tournament special.
              </p>
              <p>
                Each year, competitors gather at a carefully selected course to test their skills, share laughs, and compete for the honor of donning the Black Jacket. The tournament has become more than just a golf competition—it&apos;s a celebration of friendship and the enduring spirit of the game.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Black Jacket */}
      <section className="section-green">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              The Black Jacket Tradition
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              The Black Jacket is more than a prize—it&apos;s a symbol of excellence earned through skill, determination, and the respect of one&apos;s peers. Each year, the reigning champion has the honor of presenting the jacket to the new winner, passing on the legacy of achievement that defines our tournament.
            </p>
            <div className="bg-white/10 p-8 rounded-lg">
              <blockquote className="text-xl italic text-masters-gold">
                &quot;Winning the Black Jacket is about more than the score—it&apos;s about earning the respect of your friends and becoming part of a tradition that celebrates the best in all of us.&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-white">
        <div className="container-main">
          <h2 className="text-3xl font-serif font-bold text-masters-dark mb-12 text-center">
            The Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <div key={founder.name} className="text-center">
                {/* Photo placeholder */}
                <div className="w-32 h-32 bg-masters-green/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-masters-green/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-masters-dark mb-1">
                  {founder.name}
                </h3>
                <p className="text-masters-gold font-medium mb-3">
                  {founder.role}
                </p>
                <p className="text-gray-600">
                  {founder.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournament Format */}
      <section className="bg-gray-50 py-16">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-masters-dark mb-8 text-center">
              Tournament Format
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 shadow-lg">
                <h3 className="text-xl font-serif font-bold text-masters-green mb-3">
                  Competition Style
                </h3>
                <p className="text-gray-600">
                  Net stroke play over multiple rounds, allowing golfers of all skill levels to compete fairly using GHIN handicaps.
                </p>
              </div>
              <div className="bg-white p-6 shadow-lg">
                <h3 className="text-xl font-serif font-bold text-masters-green mb-3">
                  Eligibility
                </h3>
                <p className="text-gray-600">
                  Open to members of the Tournament of Friends community with valid GHIN handicaps.
                </p>
              </div>
              <div className="bg-white p-6 shadow-lg">
                <h3 className="text-xl font-serif font-bold text-masters-green mb-3">
                  Awards
                </h3>
                <p className="text-gray-600">
                  The Black Jacket is awarded to the overall winner. Additional prizes for lowest gross score and other achievements.
                </p>
              </div>
              <div className="bg-white p-6 shadow-lg">
                <h3 className="text-xl font-serif font-bold text-masters-green mb-3">
                  Location
                </h3>
                <p className="text-gray-600">
                  The tournament rotates to different courses each year, showcasing the best golf experiences in various regions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
