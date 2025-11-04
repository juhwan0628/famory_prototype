export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <main className="flex flex-col items-center justify-center text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
            Famory
          </h1>
          <p className="text-lg" style={{ color: 'var(--secondary)' }}>
            가족과 함께 기억하는 디지털 앨범
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-sm">
          <div
            className="p-6 rounded-xl shadow-sm"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}
          >
            <h2 className="text-xl font-semibold mb-2">Phase 1 완료</h2>
            <p className="text-sm" style={{ color: 'var(--secondary)' }}>
              Next.js 14 + TypeScript + Tailwind CSS
            </p>
            <p className="text-sm mt-2" style={{ color: 'var(--secondary)' }}>
              Famory 컬러 시스템 적용 완료
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--primary)' }}>
              <p className="text-white font-medium">Primary</p>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--secondary)' }}>
              <p className="text-white font-medium">Secondary</p>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--ai-color)' }}>
              <p className="font-medium">AI Color</p>
            </div>
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--error)' }}>
              <p className="text-white font-medium">Error</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
