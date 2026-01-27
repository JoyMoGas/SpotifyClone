export default function MainContent() {
  return (
    <main className="main-content-scroll-area">
      
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Buenos días</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px' }}>
            <article style={{ background: '#181818', padding: '16px', borderRadius: '8px', cursor: 'pointer' }}>
                <div style={{ width: '100%', aspectRatio: '1/1', background: '#333', marginBottom: '10px', borderRadius: '4px' }}></div>
                <h4>Daily Mix 1</h4>
                <p style={{ fontSize: '14px', color: '#b3b3b3' }}>Dua Lipa, The Weeknd...</p>
            </article>

            <article style={{ background: '#181818', padding: '16px', borderRadius: '8px', cursor: 'pointer' }}>
                <div style={{ width: '100%', aspectRatio: '1/1', background: '#333', marginBottom: '10px', borderRadius: '4px' }}></div>
                <h4>Descubrimiento</h4>
                <p style={{ fontSize: '14px', color: '#b3b3b3' }}>Nuevas pistas cada lunes.</p>
            </article>

             <article style={{ background: '#181818', padding: '16px', borderRadius: '8px', cursor: 'pointer' }}>
                <div style={{ width: '100%', aspectRatio: '1/1', background: '#333', marginBottom: '10px', borderRadius: '4px' }}></div>
                <h4>Rock Classics</h4>
                <p style={{ fontSize: '14px', color: '#b3b3b3' }}>Queen, AC/DC, Nirvana...</p>
            </article>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Hecho para ti</h2>
        <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '20px' }}>
            {[1,2,3,4,5,6].map((i) => (
                <article key={i} style={{ minWidth: '150px', background: '#181818', padding: '16px', borderRadius: '8px' }}>
                    <div style={{ width: '100%', height: '120px', background: '#333', marginBottom: '10px' }}></div>
                    <h4>Mix {i}</h4>
                </article>
            ))}
        </div>
      </section>
      
      <div style={{ height: '50px' }}></div>
    </main>
  );
}