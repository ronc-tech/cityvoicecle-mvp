export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>CityVoiceCLE</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          A mobile-first, video-first platform for Black Cleveland voices
        </p>
      </header>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>Featured Video</h2>
        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
          <iframe
            width="100%"
            height="400"
            src="https://player.vimeo.com/video/76979871"
            title="CityVoiceCLE Featured Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p style={{ fontSize: '1rem', color: '#333', marginTop: '1rem' }}>
          Highlighting community perspectives on local justice reform and youth advocacy.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>What is CityVoiceCLE?</h2>
        <p style={{ lineHeight: '1.6', color: '#444' }}>
          CityVoiceCLE is a community-powered news and storytelling platform elevating Black voices across Cleveland.
          Through mobile-optimized video journalism and community contributions, we inform, inspire, and empower action
          on today’s most urgent issues — from safety and housing to arts, healing, and Black excellence.
        </p>
      </section>

      <footer style={{ borderTop: '1px solid #eee', paddingTop: '1rem', fontSize: '0.875rem', color: '#888', textAlign: 'center' }}>
        &copy; 2025 CityVoiceCLE. All rights reserved.
      </footer>
    </div>
  );
}