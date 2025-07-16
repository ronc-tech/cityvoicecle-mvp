import React from "react";

const featuredVideo = {
  title: "Why Cleveland's Consent Decree Still Matters",
  url: "https://player.vimeo.com/video/123456789",
  tags: ["Policing", "Cleveland", "Civic Justice"],
};

const recentVideos = [
  {
    title: "Voices from East 105th",
    url: "https://player.vimeo.com/video/987654321",
    tags: ["Youth Voices"],
  },
  {
    title: "What Is Emergency Legislation?",
    url: "https://player.vimeo.com/video/112233445",
    tags: ["City Hall", "Explainers"],
  },
];

export default function Home() {
  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>CityVoiceCLE</h1>
        <p style={{ fontSize: '0.875rem', color: '#666' }}>Black News. Local Voices. Video First.</p>
      </header>

      <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Featured</h2>
        <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <iframe
            src={featuredVideo.url}
            style={{ width: '100%', aspectRatio: '16/9' }}
            allowFullScreen
          ></iframe>
          <div style={{ padding: '0.5rem' }}>
            <h3 style={{ fontWeight: '600', fontSize: '1.125rem' }}>{featuredVideo.title}</h3>
            <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.75rem', color: '#888' }}>
              {featuredVideo.tags.map((tag, i) => (
                <span key={i}>#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Recent Clips</h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {recentVideos.map((video, idx) => (
            <div key={idx} style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
              <iframe
                src={video.url}
                style={{ width: '100%', aspectRatio: '16/9' }}
                allowFullScreen
              ></iframe>
              <div style={{ padding: '0.5rem' }}>
                <h3 style={{ fontWeight: '500', fontSize: '1rem' }}>{video.title}</h3>
                <div style={{ fontSize: '0.75rem', color: '#888', display: 'flex', gap: '0.5rem' }}>
                  {video.tags.map((tag, i) => (
                    <span key={i}>#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Submit Your Voice</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <input placeholder="Your Name" style={{ padding: '0.5rem', fontSize: '1rem' }} />
          <input placeholder="Video Link or Message" style={{ padding: '0.5rem', fontSize: '1rem' }} />
          <button style={{ padding: '0.75rem', backgroundColor: '#000', color: '#fff', fontWeight: '600' }}>Submit</button>
        </div>
      </section>

      <footer style={{ fontSize: '0.75rem', textAlign: 'center', color: '#aaa', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
        CityVoiceCLE © 2025. Built to elevate Black Cleveland voices.
      </footer>
    </div>
  );
}